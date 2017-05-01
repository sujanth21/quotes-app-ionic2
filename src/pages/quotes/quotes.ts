import { Component, OnInit } from '@angular/core';

import { NavParams } from 'ionic-angular';

import { Quote } from '../../data/quote.interface';

@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class Quotes implements OnInit{
  quoteGroup: { category: String, quotes: Quote[], icon: String};

  constructor (
    private navParams: NavParams
  ) {}

  // ionViewDidLoad() {
  //   this.quoteGroup = this.navParams.data;
  //   Add elvis operator (?) in the template
  // }

  ngOnInit() {
    this.quoteGroup = this.navParams.data;
  }

}
