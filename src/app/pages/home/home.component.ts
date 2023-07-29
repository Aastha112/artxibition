import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommonService } from 'src/core/services/common.service';
import { HttpService } from 'src/core/services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  ActivitySubscription$ : Subscription | undefined;

  constructor(public common: CommonService, public http: HttpService) {

  }

  ngOnInit(): void {
    this.ActivitySubscription$ = this.http.getActivity().subscribe((res: any) => {
      alert('API called');
    })
  }

  ngOnDestroy() {
    this.ActivitySubscription$?.unsubscribe();
  }
}
