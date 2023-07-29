import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-heading',
  templateUrl: './page-heading.component.html',
  styleUrls: ['./page-heading.component.scss']
})
export class PageHeadingComponent {

  @Input() type: String = '';
  @Input() title: String = '';
  @Input() content: String = '';

}
