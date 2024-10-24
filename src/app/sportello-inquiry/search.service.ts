import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { definitions } from '../../data-model/sportello-inquiry.schema';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private httpClient: HttpClient) { }

  search(req: definitions["RecuperaMovimentiRequest"]) {
    return this.httpClient.post<definitions["ElencoMovimenti"]>('/api/elenco-movimenti-conto-corrente', req)
  }

}
