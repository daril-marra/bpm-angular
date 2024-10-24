import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { definitions } from '../../data-model/sportello-inquiry.schema';
import { BehaviorSubject, share } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private resultsSource = new BehaviorSubject<definitions["ElencoMovimenti"]|undefined>(undefined);
  public currentResults = this.resultsSource.asObservable();

  constructor(private httpClient: HttpClient) { }

  search(req: definitions["RecuperaMovimentiRequest"]) {
    const obs = this.httpClient.post<definitions["ElencoMovimenti"]>('/api/elenco-movimenti-conto-corrente', req)
      .pipe(share());
    obs.subscribe({
      next: (res) => this.resultsSource.next(res),
      error: () => this.resultsSource.next(undefined),
    })
    return obs;
  }

}
