import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] = [
    new Quote(1,'The only way to do great things is to love what you do.','Steve Jobs.','Yvonne',new Date(2018,3,14)),
    new Quote(2,'Dont worry about rejection all you need is one person to say yes.','Jay Shetty','Yvonne',new Date(2018,6,9)),
    new Quote(3,'Try to be rainbow in someones cloud.','Maya Angelou','Yvonne',new Date(2019,1,12)),
  ];

  toggleAuthor(index){
    this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
  }
  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete this quote: ${this.quotes[index].name}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }

  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  // quoteVoted(isVoted, index){
  //   if (isVoted) {
  //     this.quotes.splice(index,1);
  //   }
  // }
  constructor() { }

  ngOnInit() {
  }

}
