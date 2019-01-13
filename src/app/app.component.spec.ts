
import {AppComponent} from './app.component';
import {Deck} from './deck.model';

describe('AppComponent', () => {

  let comp: AppComponent;

  beforeEach(() => {
    comp = new AppComponent();
  });

  describe('Method : dealOneCard ', () => {

    describe('When deck is not empty', () => {

      it('should call deck.dealOneCard', () => {
        const component = new AppComponent();
        const deck = component.deck;

        spyOn(deck, 'dealOneCard').and.callThrough();

        component.dealOneCard();

        expect(deck.dealOneCard).toHaveBeenCalled();
      });

      it('should all last deck card into dealtCards', () => {
        const component = new AppComponent();
        const deck = component.deck;

        spyOn(deck, 'dealOneCard').and.callThrough();

        component.dealOneCard();

        expect(deck.dealOneCard).toHaveBeenCalled();
      });
    });

    describe('When deck is empty', () => {

      beforeEach(() => {
        comp.deck = new Deck([]);
      });

      it('should show Alert with "Deck is Empty" message', () => {

        spyOn(window, 'alert');

        comp.dealOneCard();

        expect(window.alert).toHaveBeenCalled();
      });

      it('should not add new card to dealtCard', () => {
        expect(comp.dealtCards.length).toEqual(0);
        comp.dealOneCard();
        expect(comp.dealtCards.length).toEqual(0);
      });
    });
  });
});
