import { Component } from '@angular/core';
import { CommonService } from 'src/core/services/common.service';

@Component({
  selector: 'app-rent-venue',
  templateUrl: './rent-venue.component.html',
  styleUrls: ['./rent-venue.component.scss']
})
export class RentVenueComponent {

  options: any[] = [];
  selectedIndex: number = 0;
  type: string = '';

  constructor(public common: CommonService) {
    this.options = [
      'Madison Square Garden', 'Radio City Musical Hall', 'Royce Hall'
    ];
    this.type = 'rentVenue';
  }

  selectTab(tab: any) {
    if(tab.type == this.type) {
      this.selectedIndex = tab.index;
    }
  }

}
