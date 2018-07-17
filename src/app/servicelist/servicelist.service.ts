import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';

@Injectable()
export class ServiceListService {
   constructor(private http: Http, private router: Router) { }

   getAllService() {
    //   return this.http.get('../data/servicelist.json').map(res => res.json());
   }
}