import { Component } from '@angular/core';
import { CommonService } from 'src/core/services/common.service';

@Component({
  selector: 'app-shows-events',
  templateUrl: './shows-events.component.html',
  styleUrls: ['./shows-events.component.scss']
})
export class ShowsEventsComponent {
  constructor(public common: CommonService) {

  }
}
