import { NgModule } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [ ],
  imports: [
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
  ],
  exports: [
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: []
})
export class MaterialModule { }
