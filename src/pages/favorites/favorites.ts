import { Component } from '@angular/core';

import { Quote } from '../../data/quote.interface';
import { QuoteService } from '../../services/quotes';

@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class Favorites {
  quotes: Quote[];

  constructor (private quoteService: QuoteService) {}

  ionViewWillEnter() {
    this.quotes = this.quoteService.getFavoriteQuotes();
  }
}
