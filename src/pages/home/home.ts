import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { CalculatorPage } from '../calculator/calculator';
import { Storage } from '@ionic/storage';
import { IncomePage } from '../income/income';
import { ExpensePage } from '../expense/expense';
import { PayslipPage } from '../payslip/payslip';
import { StockProvider } from '../../providers/stock/stock';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
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


  constructor(public storage: Storage, public navCtrl: NavController, public menuCtrl: MenuController, private mp:StockProvider) {

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

  ionViewDidLoad() {
    this.loadData();
  }
}
