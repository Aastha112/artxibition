import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  selectedIndex: number = 0;

  constructor(public router: Router) { }

  navigateTo(page: any) {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    this.router.navigate([page]);
  }

  selectTab(tab: any, type: String) {    
    if(tab.type == type) {
      this.selectedIndex = tab.index;
    }
  }

}

