import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { CalculatorPage } from '../calculator/calculator';
import { Storage } from '@ionic/storage';
import { IncomePage } from '../income/income';
import { ExpensePage } from '../expense/expense';
import { PayslipPage } from '../payslip/payslip';
import { StockProvider } from '../../providers/stock/stock';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  url: string;
  stocks:any;
  base: any;
  ratesJPY: any[];
  ratesGBP: any[];
  ratesUSD: any[];
  ratesBHD: any[];
  ratesKWD: any[];
  ratesLVL: any[];
  ratesOMR: any[];
  time: any;

  exchangeCrpt: any;
  baseCrypt: any;
  ratesLTC: any;
  ratesETH: any;
  ratesZEC: any;
  ratesXRP: any;
  ratesXMR: any;
  ratesUSDT: any;
  ratesXEM: any;

  constructor(private iab: InAppBrowser, public storage: Storage, public navCtrl: NavController, public menuCtrl: MenuController, private mp:StockProvider) {
      

  }

  openCalculator(){
    this.menuCtrl.close();
    this.navCtrl.push(CalculatorPage);
  }
  openIncome(){
    this.menuCtrl.close();
    this.navCtrl.push(IncomePage);
  }
  openExpense(){
    this.menuCtrl.close();
    this.navCtrl.push(ExpensePage);
  }
  openMenu(){
    this.menuCtrl.open();
  }

  openPayslip(){
    this.menuCtrl.close();
    this.navCtrl.push(PayslipPage);
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
      this.base = this.stocks.base;
      this.time = this.stocks.date;
    });
  }

  loadResult() {
    this.mp.getResult().then((data) => {
      this.exchangeCrpt = data;
      this.baseCrypt = this.exchangeCrpt.asset_id_base;
      this.ratesLTC = this.exchangeCrpt.rates[4].rate;
      this.ratesETH = this.exchangeCrpt.rates[3].rate;
      this.ratesZEC = this.exchangeCrpt.rates[11].rate;
      this.ratesXRP = this.exchangeCrpt.rates[24].rate;
      this.ratesXMR = this.exchangeCrpt.rates[5].rate;
      this.ratesUSDT = this.exchangeCrpt.rates[0].rate;
      this.ratesXEM = this.exchangeCrpt.rates[1].rate;
    });
  }
  ionViewDidLoad() {
    this.loadData();
    this.loadResult();
    
  }

  openWebpage(url: string){
    const options : InAppBrowserOptions = {
      zoom: 'no'
    }
    const browser = this.iab.create(url, '_system', options);
  }
}
