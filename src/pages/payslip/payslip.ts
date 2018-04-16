import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TouchID } from '@ionic-native/touch-id';
import { Camera, CameraOptions } from '@ionic-native/camera';

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
  public base64Image: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private touchId: TouchID, private camera: Camera) {
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

  addPaySlip(): Promise<string> {
    return new Promise((resolve, reject) => {

      const options: CameraOptions = {
        quality: 100,
        sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
        destinationType: this.camera.DestinationType.FILE_URI,
        encodingType: this.camera.EncodingType.JPEG,
        targetHeight: 700,
        targetWidth: 700,
        mediaType: this.camera.MediaType.PICTURE
      }

      this.camera.getPicture(options)
        .then(imageURI => resolve(imageURI), err => reject(err));
    })
  }
}
