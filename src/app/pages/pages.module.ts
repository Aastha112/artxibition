import { NgModule } from '@angular/core';

import { PagesRoutingModule } from './pages-routing.module';
import { CommonModule } from '@angular/common';
import { RentVenueComponent } from './rent-venue/rent-venue.component';
import { ShowsEventsComponent } from './shows-events/shows-events.component';
import { SharedModule } from '../shared/shared.module';
import { TicketsComponent } from './tickets/tickets.component';
import { TicketDetailsComponent } from './ticket-details/ticket-details.component';


@NgModule({
  declarations: [
    RentVenueComponent,
    ShowsEventsComponent,
    TicketsComponent,
    TicketDetailsComponent
  ],
  imports: [

    CommonModule,
    PagesRoutingModule,
    SharedModule
  ]
})
export class PagesModule { }
