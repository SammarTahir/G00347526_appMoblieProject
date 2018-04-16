import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TouchID } from '@ionic-native/touch-id';

/**
 * Generated class for the PayslipPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-payslip',
  templateUrl: 'payslip.html',
})
export class PayslipPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private touchId: TouchID) {
    this.touchId.isAvailable()
    .then(
      res => console.log('TouchID is available!'),
      err => console.error('TouchID is not available', err)
    );
  
  this.touchId.verifyFingerprint('Scan your fingerprint please')
    .then(
      res => console.log('Ok', res),
      err => console.error('Error', err)
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PayslipPage');
  }

  checkId(){
    this.touchId.isAvailable()
    .then(
      res => console.log('TouchID is available!'),
      err => console.error('TouchID is not available', err)
    );
  
  this.touchId.verifyFingerprint('Scan your fingerprint please')
    .then(
      res => console.log('Ok', res),
      err => console.error('Error', err)
    );
  }
}
