import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BelfioreService {

  constructor(private httpClient: HttpClient) { }

  get(value: string) {
    return this.httpClient.get<any>(`/api/belfiore/${value}`)
  }


}
