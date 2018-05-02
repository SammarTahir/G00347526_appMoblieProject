import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { StockProvider } from '../../providers/stock/stock';

@IonicPage()
@Component({
  selector: 'page-income',
  templateUrl: 'income.html',
})
export class IncomePage {
  stocks:any;
  base: any;
  ratesJPY: any[];
  ratesGBP: any[];
  ratesUSD: any[];
  ratesBHD: any[];
  ratesKWD: any[];
  ratesLVL: any[];
  ratesOMR: any[];

  constructor(public storage: Storage, public navCtrl: NavController,private mp:StockProvider) {
  }
  setData(){

  }

  getData(){
    
  }
  loadData() {
    this.mp.getData().then((data) => {
      console.log(data);
      this.stocks = data;
      console.log(this.stocks.rates);
      this.ratesJPY = this.stocks.rates.JPY;
      this.ratesGBP = this.stocks.rates.GBP;
      this.ratesUSD = this.stocks.rates.USD;
      this.ratesBHD = this.stocks.rates.BHD;
      this.ratesKWD = this.stocks.rates.KWD;
      this.ratesLVL = this.stocks.rates.LVL;
      this.ratesOMR = this.stocks.rates.OMR
    });
  }
}
