import { Component, OnInit } from '@angular/core';

import { Quote } from '../../data/quote.interface';
import quotes from '../../data/quotes';

import { Quotes } from '../quotes/quotes';

@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class Library implements OnInit{
  quoteCollection: {category: String, quotes: Quote[],icon: String }[];

  quotesPage = Quotes;

  ngOnInit() {
    this.quoteCollection = quotes;
  }

}
