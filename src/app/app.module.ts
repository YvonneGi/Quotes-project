import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { QuoteAuthorComponent } from './quote-author/quote-author.component';
import { AddQuoteComponent } from './add-quote/add-quote.component';
import { DateCountPipe } from './date-count.pipe';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    QuoteAuthorComponent,
    AddQuoteComponent,
    DateCountPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
