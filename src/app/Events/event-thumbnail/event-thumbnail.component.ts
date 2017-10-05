import { IEvent } from './../shared/event.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent implements OnInit {

@Input() event:IEvent
@Output() eventClick = new EventEmitter(); 

message = "this is a message from child component";

  constructor() { }

  OnButtonClick(){
  this.eventClick.emit("hello world");
  }

  ngOnInit() {
  }

  doSomething(){
    if(this.event && this.event.time === '8:00 am'){
      return 'green bold';
    }
  }

}
