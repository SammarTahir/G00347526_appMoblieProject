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
 
notes: any [] = [];

  constructor(private storage: Storage, private alertCtrl: AlertController, public actionSheetCtrl: ActionSheetController) {
    // this.storage.get('notes').then((data) => {
    //   if(data == null) {
    //     data = [];
    //   } 
    //   this.notes=data;
    //   this.notes.push(data);
    // });
  }

  // Getting data from from notes
  getData() {
    this.storage.get('notes').then((data) => {
      console.log(data);
      if(data == null) {
        data = [];
      } else {
        this.notes = data;
        console.log(this.notes);
      }
    });
  }

  ionViewDidLoad() {
    this.getData();
  }

  // The note alert to enter information
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
        data = {
          title: data.title
        }
        console.log(data);
        this.notes.push(data);
        this.storage.set('notes', this.notes);
        // this.storage.set('notes', this.notes);
      }
    }]
    });
      prompt.present();
  }
}