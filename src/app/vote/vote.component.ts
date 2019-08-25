import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {
uvoted = 0;
dvoted = 0;
upvote(){
  this.uvoted = this.uvoted +1
}
downvote(){
  this.dvoted = this.dvoted +1
}

  constructor() { }

  ngOnInit() {
  }

}
