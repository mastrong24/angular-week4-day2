import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

   hidden1=false;
   hidden2=false;
   hidden3=false;
   hidden4=false;
   
   imageSource1(){
     this.hidden1= !this.hidden1
   }

   imageSource2(){
    this.hidden1= !this.hidden2
  }

  imageSource3(){
    this.hidden1= !this.hidden3
  }

  imageSource4(){
    this.hidden1= !this.hidden4
  }

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/