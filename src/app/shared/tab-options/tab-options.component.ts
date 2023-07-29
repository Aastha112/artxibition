import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonService } from 'src/core/services/common.service';

@Component({
  selector: 'app-tab-options',
  templateUrl: './tab-options.component.html',
  styleUrls: ['./tab-options.component.scss']
})
export class TabOptionsComponent {

  @Input() type: String = '';
  @Input() options: any[] = [];
  @Output() changeTab: EventEmitter<any> = new EventEmitter<any>();
  selectedIndex :number = 0;

  constructor(public common: CommonService) {
    this.selectedIndex = 0;
  }

  selectTab(index: number) {
    console.log(index);
    this.selectedIndex = index
    this.changeTab.emit({type: this.type, index: index});
  }

}
