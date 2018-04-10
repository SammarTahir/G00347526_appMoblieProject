import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CalculatorPage } from '../calculator/calculator';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  openCalculator(){
    this.navCtrl.push(CalculatorPage);
  }
}
