import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { CalculatorPage } from '../calculator/calculator';
import { Storage } from '@ionic/storage';
import { IncomePage } from '../income/income';
@IonicPage()
@Component({
  selector: 'page-expense',
  templateUrl: 'expense.html',
})
export class ExpensePage {

  constructor(public navCtrl: NavController, public storage: Storage) {
  }

}
