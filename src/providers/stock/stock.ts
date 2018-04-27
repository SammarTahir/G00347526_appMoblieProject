import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class StockProvider {

  constructor(public http: HttpClient) {
    console.log('Hello StockProvider Provider');
  }

  getData(){
    return new Promise(resolve => {
 
      this.http.get('http://data.fixer.io/api/latest?access_key=6369dafb8484f197609f46e17e23f809')
        .map(res => res)
        .subscribe(data => {
          console.log(data);
          resolve(data);
          return data;
        });
    });
 
  }
}
