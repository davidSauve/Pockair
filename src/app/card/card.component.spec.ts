import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';
import {Component, OnInit} from '@angular/core';
import {Card, Rank, Suit} from './card.model';

describe('CardComponent', () => {
  let testHostComponent: TestHostComponent;
  let testHostFixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardComponent, TestHostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    testHostFixture = TestBed.createComponent(TestHostComponent);
    testHostComponent = testHostFixture.componentInstance;
    testHostFixture.detectChanges();
  });

  it('should create', () => {
    expect(testHostComponent).toBeTruthy();
  });

  it('should show correct card related image', () => {
    testHostFixture.detectChanges();
    expect(testHostFixture.nativeElement.querySelector('img').getAttribute('src'))
      .toEqual('assets/cards/' + Rank.ACE + Suit.CLUB + '.png');
  });

  @Component({
    selector: 'app-host-component',
    template: '<app-card [card]="card"></app-card>'
  })
  class TestHostComponent implements OnInit {
    private card: Card;

    ngOnInit(): void {
      this.card = { rank : Rank.ACE, suit : Suit.CLUB};
    }
  }
});
