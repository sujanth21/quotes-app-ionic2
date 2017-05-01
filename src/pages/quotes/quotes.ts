import { Component, OnInit } from '@angular/core';

import { NavParams, AlertController } from 'ionic-angular';

import { Quote } from '../../data/quote.interface';

@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class Quotes implements OnInit{
  quoteGroup: { category: String, quotes: Quote[], icon: String};

  constructor (
    private navParams: NavParams,
    private alertCtrl: AlertController
  ) {}

  // ionViewDidLoad() {
  //   this.quoteGroup = this.navParams.data;
  //   Add elvis operator (?) in the template
  // }

  ngOnInit() {
    this.quoteGroup = this.navParams.data;
  }

  onAddToFavorite(SelectedQuote: Quote) {
    const alert = this.alertCtrl.create({
      title: 'Add Quote',
      subTitle: 'Are you sure?',
      message: 'Are you sure you want to add the quote?',
      buttons: [
        {
          text: 'Yes, go ahead',
          handler: () => {
            console.log('Pressed YES button');
          }
        },
        {
          text: 'No, I changed my mind!',
          role: 'cancel',
          handler: () => {
            console.log('Pressed Cancel button');
          }
        }
      ]
    });

    alert.present();
  }

}
