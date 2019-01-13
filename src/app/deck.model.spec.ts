import {Deck} from './deck.model';
import {Rank, Suit} from './card/card.model';

describe('Deck Model', () => {
  let deck: Deck;

  beforeEach(() => {
    deck = new Deck();
  });

  describe('Constructor', () => {
    it('should create 52 poker-style playing cards', () => {
      const cards = deck.cards;

      expect(cards.length).toEqual(52);

      for (const _rank of Object.keys(Rank)) {
        for (const _suit of Object.keys(Suit)) {
          expect(cards.find(card => card.suit === Suit[_suit] && card.rank === Rank[_rank])).not.toBeUndefined();
        }
      }
    });
  });

  describe('Method : shuffle', () => {
    it('should keep the same cards inside the deck', () => {
      deck.shuffle();

      const cards = deck.cards;

      expect(cards.length).toEqual(52);

      for (const _rank of Object.keys(Rank)) {
        for (const _suit of Object.keys(Suit)) {
          expect(cards.find(card => card.suit === Suit[_suit] && card.rank === Rank[_rank])).not.toBeUndefined();
        }
      }
    });

    it('should randomly shuffle deck', () => {
      const cardsBeforeShuffle = Object.assign([], deck.cards);
      deck.shuffle();
      const cardsAfterShuffle = Object.assign([], deck.cards);

      expect(cardsBeforeShuffle).not.toEqual(cardsAfterShuffle);
    });
  });

  describe('Method : dealOneCard', () => {
    it('should remove the last card of the deck and return it', function () {
      const expectedCard = deck.cards[deck.cards.length - 1];

      expect(deck.dealOneCard()).toEqual(expectedCard);
      expect(deck.cards.length).toEqual(51);
    });

    it('should throw expection if deck is empty', function () {
      const initialDeckLength = deck.cards.length;
      for (let i = 0; i < initialDeckLength; i++) {
        deck.dealOneCard();
      }

      expect(deck.cards.length).toEqual(0);

      expect(function () {
        deck.dealOneCard();
      }).toThrow(new Error('Deck is empty'));
    });
  });

  describe('Method : isEmpty', () => {
    it('should return false if deck.cards.length > 0', function () {
      expect(deck.cards.length).toEqual(52);
      expect(deck.isEmpty()).toBe(false);
    });

    it('should return true if deck.cards.length = 0', function () {
      const initialDeckLength = deck.cards.length;
      for (let i = 0; i < initialDeckLength; i++) {
        deck.dealOneCard();
      }

      expect(deck.cards.length).toEqual(0);
      expect(deck.isEmpty()).toBe(true);
    });

  });


});
