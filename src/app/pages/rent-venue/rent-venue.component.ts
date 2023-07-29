import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/core/services/common.service';

@Component({
  selector: 'app-rent-venue',
  templateUrl: './rent-venue.component.html',
  styleUrls: ['./rent-venue.component.scss']
})
export class RentVenueComponent implements OnInit {

  options: any[] = [];
  type: string = '';
  title: String = '';
  content: String = '';

  constructor(public common: CommonService) {
    this.options = [
      'Madison Square Garden', 'Radio City Musical Hall', 'Royce Hall'
    ];
    this.type = 'rentVenue';
    this.title = 'Are You Looking For A Venue?';
    this.content = 'Check out our venues, pick your choice and fill the reservation application.';
  }

  ngOnInit(): void {
    this.common.selectedIndex = 0
  }

}
