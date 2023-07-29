import { Component } from '@angular/core';
import { CommonService } from 'src/core/services/common.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent {

  type: string = '';
  title: String = '';
  content: String = '';

  constructor(public common: CommonService) {
    this.type = 'showsEvents';
    this.title = 'Tickets On Sale Now!';
    this.content = 'Check out upcoming and past shows & events and grab your ticket right now.';
  }
}
