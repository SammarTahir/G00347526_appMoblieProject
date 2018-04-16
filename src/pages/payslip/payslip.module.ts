import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PayslipPage } from './payslip';
import { TouchID } from '@ionic-native/touch-id';


@NgModule({
  declarations: [
    PayslipPage,
  ],
  imports: [
    IonicPageModule.forChild(PayslipPage),
  ],
})
export class PayslipPageModule {}
