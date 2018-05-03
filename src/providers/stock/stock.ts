import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class StockProvider {

  constructor(public http: HttpClient) {
    // Checking to see if StockProvider works
    console.log('Hello StockProvider Provider');
  }


  // Getting information from the api for currency exchange
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

  // Getting information from the api for crypto currency exchange
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
