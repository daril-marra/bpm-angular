import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './sportello-inquiry/search/search.component';
import { SearchResultsComponent } from './sportello-inquiry/search-results/search-results.component';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MovimentiTableComponent } from './sportello-inquiry/movimenti-table/movimenti-table.component';
import localeIt from '@angular/common/locales/it'
import { registerLocaleData } from '@angular/common';
import { BelfiorePipe } from './sportello-inquiry/pipes/belfiore.pipe';
registerLocaleData(localeIt)

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SearchResultsComponent,
    MovimentiTableComponent,
    BelfiorePipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: "it" }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
