import { CATEGORIE } from './../../../data-model/categoria';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {

  searchForm: FormGroup;
  categoriesList = ["TUTTI", ...CATEGORIE];

  constructor(private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      dipendenza: ["", [Validators.required, Validators.maxLength(4), Validators.pattern(/^[0-9]{0,4}$/)]],
      numRapporto: ["", [Validators.required, Validators.maxLength(6), Validators.pattern(/^[0-9]{0,6}$/)]],
      categoria: ["TUTTI", []],
    });
  }

  onSubmit() {
    console.log(this.searchForm.value);
  }

  reset() {
    this.searchForm.reset();
  }

}
