import { Component, OnInit,Input } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote-author',
  templateUrl: './quote-author.component.html',
  styleUrls: ['./quote-author.component.css']
})
export class QuoteAuthorComponent implements OnInit {
  @Input() quote: Quote;

  constructor() { }

  ngOnInit() {
  }

}
