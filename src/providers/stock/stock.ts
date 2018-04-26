import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class StockProvider {

  constructor(public http: HttpClient) {
    console.log('Hello StockProvider Provider');
  }
// 3WLV8C45XH7V10GP API key
  GetStockData():Observable<any>{
    return this.http.get('https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=BTC&to_currency=CNY&apikey=demo');
  }
}
