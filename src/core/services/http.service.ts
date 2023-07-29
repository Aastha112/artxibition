import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  url: string = '';

  constructor(public http: HttpClient, public router: Router) { 
    
  }

  getActivity() {
    const apiUrl = 'https://www.boredapi.com/api/activity';
    return this.http.get(apiUrl);
  }


}
