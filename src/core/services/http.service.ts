import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  url: string = '';
  organizationData: any = [];
  getHttpOptions: ((options?: any) => any) | undefined;

  constructor(public http: HttpClient, public router: Router) { 

  }


}
