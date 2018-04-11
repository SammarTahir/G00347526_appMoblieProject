import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';


@IonicPage()
@Component({
  selector: 'page-calculator',
  templateUrl: 'calculator.html',
})
export class CalculatorPage {
  result: number;
  value: any;
  decimal: boolean;
  answer: number;
  total: Array<number>;
  clear: boolean;
  previous_operator: any;

  constructor(public navCtrl: NavController,public storage: Storage) {
    this.result = 0;
    this.decimal = false;
    this.answer = 0;
    this.total = [];
    this.clear = false;
    this.previous_operator = false;
  }

  addToCalculation(value) {

    if(this.clear == true) {
        this.result = 0;
        this.clear = false;
    }

    if(value == '.') {

        if(this.decimal == true) {
            return false;
        }

        this.decimal = true;

    }

    this.result += value;

}

 
  calculate(operator) {

    this.total.push(this.result);
    this.result = 0;

    if(this.total.length == 2) {
      var a = Number(this.total[0]);
      var b = Number(this.total[1]);
      var total;

      if(this.previous_operator == '+') {
        total = a + b;
      } else if(this.previous_operator == '-') {
        total = a - b;
      } else if(this.previous_operator == '*') {
        total = a * b;
      } else {
        total = a / b;
      }
      var answer = total;

      this.total = [];
      this.total.push(answer);
      this.result = total;
      this.clear = true;
    }
    else {
      this.clear = false;
    }
    this.decimal = false;
    this.previous_operator = operator;

}

getTotal() {
    var a = Number(this.total[0]);
    var b = Number(this.result);
    var total;
    if(this.previous_operator == '+') {
      total = a + b;
    } else if(this.previous_operator == '-') {
      total = a - b;
    } else if(this.previous_operator == '*') {
      total = a * b;
    } else {
      total = a / b;
    }

    if(isNaN(total)) {
        return false;
    }

    this.result = total;
    this.total = [];
    this.clear = true;
}
}
