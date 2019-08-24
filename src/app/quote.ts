export class Quote {
  // id: number;
  // name: string;
  // author: string;
  showAuthor: boolean;
  constructor(public id: number,public name: string,public author: string,public publisher:string,public completeDate: Date){
    this.showAuthor=false;
  }
}
