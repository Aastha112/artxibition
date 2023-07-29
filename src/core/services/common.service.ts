import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(public router: Router) { }

  navigateTo(page: any) {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    this.router.navigate([page]);
  }

}

