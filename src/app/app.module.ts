import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { TestDateRangeComponent } from './test-date-range/test-date-range.component';

@NgModule({
  declarations: [
    AppComponent,
    TestDateRangeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxDaterangepickerMd.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
