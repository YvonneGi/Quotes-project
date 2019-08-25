import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote-author',
  templateUrl: './quote-author.component.html',
  styleUrls: ['./quote-author.component.css']
})
export class QuoteAuthorComponent implements OnInit {
  @Input() quote: Quote;
  @Output() isComplete = new EventEmitter<boolean>();
  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }
  // deleteQuote(isVoted, index){
  //   if (isVoted) {
  //     let toVote = confirm(``)

  //     if (toVote){
  //       this.quote.count(index,+1)
  //     }
  //   }
  // }

  constructor() { }

  ngOnInit() {
  }

}
