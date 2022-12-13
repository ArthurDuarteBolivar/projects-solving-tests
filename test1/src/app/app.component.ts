import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  message: boolean = true;
  messageForward: boolean = true;

  ngOnInit(): void {
    // setTimeout(() => {
    //   this.listar();
    // }, 1000);
  }
  points: any = []
  pointsSave: any = []
  onclick(event: any){
    var {clientX, clientY} = event
    this.points.push({clientX, clientY})
    if(this.points != null || undefined){
      this.message = false;
    }
    this.messageForward = this.pointsSave.length > 0 ? false : true;
  }
  back(){
    if(this.pointsSave != null || undefined){
      this.pointsSave.push(this.points[this.points.length - 1]);
      this.points.pop()
    }
    this.messageForward = this.pointsSave.length > 0 ? false : true;
  }
  forward(){
    let lastElement = this.pointsSave[this.pointsSave.length - 1];
    if(lastElement != null || undefined){
      let clientX = lastElement.clientX
      let clientY = lastElement.clientY
      this.points.push({clientX, clientY})
    }
    this.messageForward = this.pointsSave.length > 0 ? false : true;
    this.pointsSave.pop();
  }
  // listar(){
  //   this.points.forEach((e: any) => {
  //     console.log(e.clientX, e.clientY)
  //   });
  // }
}
