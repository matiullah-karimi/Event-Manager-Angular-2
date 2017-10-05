import { EventsListResolverService } from './app/Events/shared/events-list-resolver.service';
import { Routes } from '@angular/router';
import { EventListComponent } from './app/Events/event-list/event-list.component';
import {EventDetailComponent} from './app/Events/event-detail/event-detail.component';
import {CreateEventComponent} from './app/Events/create-event/create-event.component';
import {Error404Component} from './app/Events/errors/404.component';
import {EventRouteActivator} from './app/Events/event-detail/event-route-activator.service';

export const appRoutes: Routes =[
    {path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivate']},
    {path: 'events', component: EventListComponent, resolve: {events: EventsListResolverService}},
    {path: 'events/:id', component: EventDetailComponent, canActivate: [EventRouteActivator]},
    {path: '404', component: Error404Component},
    {path: '', redirectTo: 'events', pathMatch: 'full'},
    {path: 'user', loadChildren: 'app/user/user.module#UserModule'}
];