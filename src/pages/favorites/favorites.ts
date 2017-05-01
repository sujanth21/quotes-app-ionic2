import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';

import { Quote } from '../../data/quote.interface';
import { QuoteService } from '../../services/quotes';

import { QuotePage } from '../quote/quote';

@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class Favorites {
  quotes: Quote[];

  constructor (
    private quoteService: QuoteService,
    private modalCtrl: ModalController) {}

  ionViewWillEnter() {
    this.quotes = this.quoteService.getFavoriteQuotes();
  }

  onViewQuote(quote: Quote) {
    const modal = this.modalCtrl.create(QuotePage, quote);
    modal.present();
    modal.onDidDismiss((remove: boolean) => {
      if(remove){
        this.onRemoveFromFavorites(quote);
      }
    });
  }

  onRemoveFromFavorites(quote: Quote) {
    this.quoteService.removeQuoteFromFavorites(quote);
    this.quotes = this.quoteService.getFavoriteQuotes();
  }
}
