import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { RentVenueComponent } from './rent-venue/rent-venue.component';
import { PagesComponent } from './pages.component';
import { ShowsEventsComponent } from './shows-events/shows-events.component';
import { TicketsComponent } from './tickets/tickets.component';
import { TicketDetailsComponent } from './ticket-details/ticket-details.component';

const routes: Routes = [
  {
    path:'',
    component: PagesComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'about-us',
        component: AboutUsComponent
      },
      {
        path: 'rent-venue',
        component: RentVenueComponent
      },
      {
        path: 'shows-events',
        component: ShowsEventsComponent
      },
      {
        path: 'tickets',
        component: TicketsComponent
      },
      {
        path: 'ticket-details',
        component: TicketDetailsComponent
      }
    ]
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
