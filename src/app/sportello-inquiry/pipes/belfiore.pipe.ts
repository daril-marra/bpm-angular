import { BelfioreService } from './../belfiore.service';
import { Pipe, PipeTransform } from "@angular/core";
import { map, Observable, of } from "rxjs";

@Pipe({
  name: 'belfiore',
  pure: true
})
export class BelfiorePipe implements PipeTransform {

  constructor(private belfioreService: BelfioreService) {}

  transform(value: string|null): Observable<string> {
    if(value == null) return of('');
    return this.belfioreService.get(value)
      .pipe(map(e => {
        return e?.descrizione ?? value;
      }))
  }
}
