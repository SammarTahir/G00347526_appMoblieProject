import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TouchID } from '@ionic-native/touch-id';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';

@IonicPage()

@Component({
  selector: 'page-payslip',
  templateUrl: 'payslip.html',
})
export class PayslipPage {
  url: string;
  constructor(private iab: InAppBrowser, public navCtrl: NavController, public navParams: NavParams, private touchId: TouchID) {
    // Checking to see if touchId is available on device.
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

  // Opens link in the system browser
  openWebpage(url: string){
    const options : InAppBrowserOptions = {
      zoom: 'no'
    }
   this.iab.create(url, '_system', options);
  }
}
