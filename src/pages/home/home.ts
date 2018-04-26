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
  stocks:any[]=[];
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

  ionViewDidLoad() {
    // console.log("I'm alive!");
    this.mp.GetStockData().subscribe(data =>
    {
        this.stocks = data.Search;
    })
  }
}
