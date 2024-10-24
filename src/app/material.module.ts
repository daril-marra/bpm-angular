import { NgModule } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [ ],
  imports: [
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
  ],
  exports: [
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'it-IT' },
  ],
  bootstrap: []
})
export class MaterialModule { }
