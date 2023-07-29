import { Component } from '@angular/core';
import { CommonService } from 'src/core/services/common.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent {

  constructor(public common: CommonService) {

  }

}
