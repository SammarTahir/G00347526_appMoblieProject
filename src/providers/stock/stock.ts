import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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

  getResult(){
    return new Promise(resolve => {
 
      this.http.get('https://rest.coinapi.io/v1/exchangerate/BTC?apikey=F53F4594-0A1E-408F-A8F6-7ADAEB2B0D35')
        .map(res => res)
        .subscribe(data => {
          console.log(data);
          resolve(data);
          return data;
        });
    });
 
  }
}
