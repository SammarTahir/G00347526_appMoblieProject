import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
@IonicPage()

@Component({
  selector: 'page-expense',
  templateUrl: 'expense.html',
})
export class ExpensePage {
 
  notes: any = [];

  constructor(private storage: Storage, private alertCtrl: AlertController, public actionSheetCtrl: ActionSheetController) {
    this.storage.get('timeline').then((data)=>{
      this.notes = data;
    });
  }

  addNote(){
  let prompt = this.alertCtrl.create({
    title: 'Enter the amount:',
    message: 'Add information and amount',
    inputs: [{
      name: 'title'
    }],
    buttons: [{
      text: 'Cancel'
    },
    {
      text: 'Add',
      handler: data => {
        this.storage.set('timeline',this.notes.push(data));

      }
    }]
    });
      prompt.present();
  }
}