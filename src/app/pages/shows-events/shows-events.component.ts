import { Component } from '@angular/core';
import { CommonService } from 'src/core/services/common.service';

@Component({
  selector: 'app-shows-events',
  templateUrl: './shows-events.component.html',
  styleUrls: ['./shows-events.component.scss']
})
export class ShowsEventsComponent {
  
  options: any[] = [];
  type: string = '';
  title: String = '';
  content: String = '';

  constructor(public common: CommonService) {
    this.options = [
      'Upcoming', 'Past'
    ];
    this.type = 'showsEvents';
    this.title = 'Our Shows & Events';
    this.content = 'Check out upcoming and past shows & events.';
  }

  ngOnInit(): void {
    this.common.selectedIndex = 0
  }
}
