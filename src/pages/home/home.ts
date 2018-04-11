import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { CalculatorPage } from '../calculator/calculator';
import { Storage } from '@ionic/storage';
import { IncomePage } from '../income/income';
import { ExpensePage } from '../expense/expense';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public storage: Storage, public navCtrl: NavController,
    public menuCtrl: MenuController) {

  }
  openCalculator(){
    this.navCtrl.push(CalculatorPage);
  }
  openIncome(){
    this.navCtrl.push(IncomePage);
  }
  openExpense(){
    this.navCtrl.push(ExpensePage);
  }
  openMenu(){
    this.menuCtrl.open();
  }
}
