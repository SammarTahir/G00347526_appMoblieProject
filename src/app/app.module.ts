import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CalculatorPage } from '../pages/calculator/calculator';
import { IncomePage } from '../pages/income/income';
import { ExpensePage } from '../pages/expense/expense';
import { IonicStorageModule } from '@ionic/storage';
import { TouchID } from '@ionic-native/touch-id';
import { PayslipPage } from '../pages/payslip/payslip';
import { Camera } from '@ionic-native/camera';
import { StockProvider } from '../providers/stock/stock';
import { HttpClientModule } from '@angular/common/http';
import { InAppBrowser } from '@ionic-native/in-app-browser';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CalculatorPage,
    IncomePage,
    ExpensePage,
    PayslipPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp,{
      menuType: 'overlay',
      platform:{
        ios:{
          menuType: 'overlay',
        }
      }
    }),
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CalculatorPage,
    IncomePage,
    ExpensePage,
    PayslipPage
  ],
  providers: [
    StatusBar,
    TouchID,
    Camera,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    StockProvider,
    InAppBrowser
  ]
})
export class AppModule {}
