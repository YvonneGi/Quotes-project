import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote-author',
  templateUrl: './quote-author.component.html',
  styleUrls: ['./quote-author.component.css']
})
export class QuoteAuthorComponent implements OnInit {
  @Input() quote: Quote;
  @Output() isVoted = new EventEmitter<boolean>();

  quoteVoted(vote:boolean){
    this.isVoted.emit(vote);
  }

  constructor() { }

  ngOnInit() {
  }

}
