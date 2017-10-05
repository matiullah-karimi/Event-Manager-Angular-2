import { AuthService } from './user/user.service';
import { EventsListResolverService } from './Events/shared/events-list-resolver.service';
import { ToastrService } from './common/toastr.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EventListComponent } from './Events/event-list/event-list.component';
import { EventThumbnailComponent } from './Events/event-thumbnail/event-thumbnail.component';
import { NavbarComponent } from './nav/navbar.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {EventsService} from './Events/shared/events.service';
import { EventDetailComponent } from './Events/event-detail/event-detail.component';
import { appRoutes } from '../routes';
import { CreateEventComponent } from './Events/create-event/create-event.component';
import { Error404Component } from './Events/errors/404.component';
import { EventRouteActivator } from './Events/event-detail/event-route-activator.service';
import { CreateSessionComponent } from './Events/event-detail/create-session/create-session.component';

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    EventsService,
    EventRouteActivator,
    ToastrService,
    EventsListResolverService,
    AuthService,
    {
      provide: 'canDeactivate',
      useValue: checkDirtyState,
    }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent){
  if(component.isDirty){
    return window.confirm('Do you really want to cancel?');
  }
  return true;
}