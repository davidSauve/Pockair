import {Card, Rank, Suit} from './card/card.model';

export class Deck {
  private _cards: Card[];

  constructor(cards?: Card[]) {

    if (cards) {
      this._cards = cards;
    } else {
      this._cards = [];
      for (const _rank of Object.keys(Rank)) {
        for (const _suit of Object.keys(Suit)) {
          this._cards.push({rank: Rank[_rank], suit: Suit[_suit]});
        }
      }
    }
  }

  get cards(): Card[] {
    return this._cards;
  }

  isEmpty(): boolean {
    return this._cards.length === 0;
  }

  dealOneCard(): Card | never {
    if (this.isEmpty()) {
      throw new Error('Deck is empty');
    }

    return this._cards.pop();
  }

  shuffle(): void {
    // modern version of the Fisher–Yates shuffle
    for (let i = this._cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this._cards[i], this._cards[j]] = [this._cards[j], this._cards[i]];
    }
  }


}
