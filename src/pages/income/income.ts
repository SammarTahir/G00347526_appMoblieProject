import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { CalculatorPage } from '../calculator/calculator';
import { ExpensePage } from '../expense/expense';

@IonicPage()
@Component({
  selector: 'page-income',
  templateUrl: 'income.html',
})
export class IncomePage {

  constructor(public storage: Storage, public navCtrl: NavController) {
  }
 

}
