import { Component } from '@angular/core';

import { Favorites } from '../favorites/favorites';
import { Library } from '../library/library';

@Component ({
    selector: 'page-tabs',
    template: `
        <ion-tabs>
            <ion-tab [root]="favorites" tabTitle="Favorite" tabIcon="star"></ion-tab>
            <ion-tab [root]="library" tabTitle="Library" tabIcon="book"></ion-tab>
        </ion-tabs>
    `
})

export class Tabs {
    favorites = Favorites;
    library = Library;
}