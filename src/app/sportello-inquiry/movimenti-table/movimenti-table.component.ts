import { Component, Input } from '@angular/core';
import { definitions } from '../../../data-model/sportello-inquiry.schema';
import { MovimentiTable } from '../../../data-model/movimenti-table';

@Component({
  selector: 'app-movimenti-table',
  templateUrl: './movimenti-table.component.html',
  styleUrl: './movimenti-table.component.scss'
})
export class MovimentiTableComponent {

  @Input() set data( source: definitions["MovimentiContoCorrente"][]) {
    this._data = this.mapData(source)
  }

  _data: MovimentiTable[] = [];

  displayedColumns: string[] = ["id", "dataDisponibilita", "importo", "causale", "codiceBelfioreNazione"];

  mapData(source: definitions["MovimentiContoCorrente"][]): MovimentiTable[] {
    return source.map(src => {
      return {
        id: src.identificativoMovimentoPerContoCorrente,
        importo: src.importo,
        causale: src.causale?.descrizione,
        dataDisponibilita: new Date(src.dataDisponibilita),
        codiceBelfioreNazione: src.codiceBelfiore,
      }
    })
  }

}
