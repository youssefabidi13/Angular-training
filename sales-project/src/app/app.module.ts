import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SalesPersonListComponent } from './sales-person-list/sales-person-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SalesPersonListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
