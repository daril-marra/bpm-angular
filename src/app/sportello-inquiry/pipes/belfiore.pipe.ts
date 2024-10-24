import { Pipe, PipeTransform } from "@angular/core";
import countries from "../../../mocks/countries/countries";

@Pipe({name: 'belfiore'})
export class BelfiorePipe implements PipeTransform {
  transform(value: string): string {
    if(value) {
      const result = countries.find(element => element.codiceBelfiore === value);
      return result?.descrizione ?? value;
    }
    return '';
  }
}
