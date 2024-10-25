import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, share } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BelfioreService {

  constructor(private httpClient: HttpClient) { }

  private cache:any[] = [];

  get(value: string) {
    const res = this.cache.find((e: any) => e.codiceBelfiore === value)
    if (res) {
      return of(res)
    }
    const obs = this.httpClient.get<any>(`/api/belfiore/${value}`)
      .pipe(share())
    obs.subscribe((res: any) => {
      this.cache.push(res)
      console.log(this.cache)
    })
    return obs;
  }


}
