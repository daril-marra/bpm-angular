import { Component} from '@angular/core';
import { definitions } from '../../../data-model/sportello-inquiry.schema';
import { SearchService } from '../search.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.scss'
})
export class SearchResultsComponent {

  res?: definitions["ElencoMovimenti"];
  searchResultsSubscription?: Subscription;

  constructor(private searchService: SearchService) {}

  ngOnInit() {
    this.searchResultsSubscription = this.searchService.currentResults.subscribe({
      next:(results) => this.res = results
    })
  }

  ngOnDestroy() {
    this.searchResultsSubscription?.unsubscribe();
  }

}
