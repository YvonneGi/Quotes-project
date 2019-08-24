import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] = [
    new Quote(1,'The only way to do great things is to love what you do.','by Steve Jobs.','yvn',new Date(2018,3,14)),
    new Quote(2,'Dont worry about rejection all you need is one person to say yes.',' by Jay Shetty','juru',new Date(2018,6,9)),
    new Quote(3,'Try to be rainbow in someones cloud.','by Maya Angelou','Chrne',new Date(2019,1,12)),
  ];

  toggleAuthor(index){
    this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
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
