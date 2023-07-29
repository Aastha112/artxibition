import { Component } from '@angular/core';
import { CommonService } from 'src/core/services/common.service';

@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.scss']
})
export class TicketDetailsComponent {

  type: string = '';
  title: String = '';
  content: String = '';

  constructor(public common: CommonService) {
    this.type = 'showsEvents';
    this.title = 'Tickets On Sale Now!';
    this.content = 'Check out upcoming and past shows & events and grab your ticket right now.';
  }
}
