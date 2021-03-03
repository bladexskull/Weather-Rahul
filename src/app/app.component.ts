import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'firstlearningapp';
  isTrue:boolean=true;
  count:number=1;
  myInterval:any;
  maketrue() {
   this.isTrue=true;
  };
  makefalse() {
    this.isTrue=false;
  }
  increaseCount(){
    this.count++;
  }
  regularCount(){
    this.myInterval=setInterval(()=>{this.increaseCount();},0);
  }
stop(){
  clearInterval(this.myInterval);
  // this.count=0;
}
} 
