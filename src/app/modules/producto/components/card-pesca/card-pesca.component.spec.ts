import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPescaComponent } from './card-pesca.component';

describe('CardPescaComponent', () => {
  let component: CardPescaComponent;
  let fixture: ComponentFixture<CardPescaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardPescaComponent]
    });
    fixture = TestBed.createComponent(CardPescaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
