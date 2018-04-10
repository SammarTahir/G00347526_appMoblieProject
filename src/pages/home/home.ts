import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { CalculatorPage } from '../calculator/calculator';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public menuCtrl: MenuController) {

  }
  openCalculator(){
    this.navCtrl.push(CalculatorPage);
  }
  openMenu(){
    this.menuCtrl.open();
  }
}
