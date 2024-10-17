import { CATEGORIE, categorieValidator, DEFAULT_CATEGORIA } from './../../../data-model/categoria';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';

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

  constructor(private fb: FormBuilder) {

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

}
