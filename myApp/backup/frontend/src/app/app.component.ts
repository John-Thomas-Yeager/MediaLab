import { Component, OnInit } from '@angular/core';
import * as JQ from 'jquery';

// declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'myApp';

  ngOnInit(){

    JQ('#test').click(function(){
      alert('Wass up!');
       });

  }
}


