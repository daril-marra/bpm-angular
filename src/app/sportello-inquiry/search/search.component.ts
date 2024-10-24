import { CATEGORIE, categorieValidator, DEFAULT_CATEGORIA } from './../../../data-model/categoria';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';
import { definitions } from '../../../data-model/sportello-inquiry.schema';
import reqBody from '../../../mocks/sportello-inquiry/request-body.json';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {

  searchForm: FormGroup;
  categoriesList = CATEGORIE;
  isNumRapportoDisabled = false;
  today = new Date();
  oneMonthAgo?: Date;
  results?: definitions["ElencoMovimenti"];

  constructor(
    private fb: FormBuilder,
    private searchService: SearchService,
  ) {

    this.oneMonthAgo = new Date();
    this.oneMonthAgo.setMonth(this.oneMonthAgo.getMonth() -1)

    this.searchForm = this.fb.group({
      dipendenza: ["", [Validators.required, Validators.maxLength(4), Validators.pattern(/^[0-9]{0,4}$/)]],
      numRapporto: ["", [Validators.required, Validators.maxLength(6), Validators.pattern(/^[0-9]{0,6}$/)]],
      categoria: [DEFAULT_CATEGORIA.code, [categorieValidator]],
      dataInizio: [ new Date(this.oneMonthAgo?.getTime()), []],
      dataFine: [new Date(), []],
      dataValuta: [null, []],
      causale: ["", [Validators.pattern(/^(?!\s*$).+/)]],
      importo: ["", [Validators.pattern(/^-?((0(\.[0-9]{1,2})?)|([1-9][0-9]{0,12}(\.[0-9]{1,2})?))$/)]],
    });
  }

  onSubmit() {
    console.log(this.searchForm.value);
    console.log(this.searchForm);
    console.log(this.searchForm.valid);
    if(this.searchForm.valid) {
      this.searchService.search(this.extractFormData())
        .subscribe(res => {
          console.log(res)
          this.results = res;
        });
    }
  }

  reset() {
    this.searchForm.reset();
  }

  onCategorySelection(event: MatSelectChange) {
    if (event.value === '20') {
      this.searchForm.get('numRapporto')?.disable();
      // this.isNumRapportoDisabled = true;
    } else {
      this.searchForm.get('numRapporto')?.enable();
      // this.isNumRapportoDisabled = false;
    }
  }

  extractFormData(): definitions["RecuperaMovimentiRequest"] {
    const req: any = {}
    req.tracciaturaApplicativa = reqBody.tracciaturaApplicativa;
    req.contoCorrente = {};
    req.contoCorrente.codiceFiliale = this.searchForm.value?.dipendenza;
    req.contoCorrente.numero = this.searchForm.value?.numRapporto;
    req.contoCorrente.categoria = this.searchForm.value?.categoria;
    req.filtriDiRicerca = {};
    req.filtriDiRicerca.codiceCausale = this.searchForm.value?.causale || undefined;
    req.filtriDiRicerca.importoMovimento = this.searchForm.value?.importo || undefined;
    //TODO: mappa date
    return req as definitions["RecuperaMovimentiRequest"];
  }

}
