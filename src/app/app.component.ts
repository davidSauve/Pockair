import {Component} from '@angular/core';
import {Deck} from './deck.model';
import {Card} from './card/card.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public deck: Deck;
  public dealtCards: Card[];

  constructor() {
    this.rebuildDeck();
  }

  dealOneCard(): void {
    try {
      this.dealtCards.push(this.deck.dealOneCard());
    } catch (e) {
      alert(e.toString());
    }
  }

  rebuildDeck(): void {
    this.deck = new Deck();
    this.dealtCards = [];
  }
}
