import { EventsService } from './../shared/events.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  isDirty = true;
  
  constructor(private router: Router, private eventService: EventsService) { }

  ngOnInit() {

  }

  saveEvent(formValues){
    this.eventService.saveEvent(formValues);
    this.isDirty = false;
    this.router.navigate(['events']);
    }

  cancel(){
    this.router.navigate(['/events']);
  }
}
