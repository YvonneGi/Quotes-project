import { Component } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'Quotes';
  // quote = 'Belive in youself'
  // quotes:string[];

  // constructor(){
  //   this.quotes = ['The only way to do great things is to love what you do',
  //    'Dont worry about rejection all you need is one person to say yes', 'Try to be rainbow in someones cloud']
  // } 
  quotes:Quote[] = [
    {id:1, name:'The only way to do great things is to love what you do'},
    {id:2,name:'Dont worry about rejection all you need is one person to say yes'},
    {id:3,name:'Try to be rainbow in someones cloud'},
    // {id:4,name:'Get Dog Food'},
    // {id:5,name:'Solve math homework'},
    // {id:6,name:'Plot my world domination plan'},
  ];
}
