import { Component, Input } from '@angular/core';
import { definitions } from '../../../data-model/sportello-inquiry.schema';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.scss'
})
export class SearchResultsComponent {

  @Input() res?: definitions["ElencoMovimenti"];

}
