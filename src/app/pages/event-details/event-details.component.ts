import { Component } from '@angular/core';
import { CommonService } from 'src/core/services/common.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent {
  constructor(public common: CommonService) {

  }
}
