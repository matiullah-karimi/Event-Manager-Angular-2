import { IEvent } from './../shared/event.model';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from './../../common/toastr.service';
import { Component, OnInit } from '@angular/core';
import {EventsService} from '../shared/events.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  events:IEvent[]

  constructor(private eventService: EventsService, private toaster: ToastrService,
  private route: ActivatedRoute) {
   }

   OnButtonClick(data) {
    this.toaster.success("hello", "sir")
  }
  ngOnInit() {
      // this.eventService.getEvents().subscribe(events => {
      //   this.events = events;
      // })

      this.events = this.route.snapshot.data['events']
  }

}
