import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardKayakComponent } from './card-kayak.component';

describe('CardKayakComponent', () => {
  let component: CardKayakComponent;
  let fixture: ComponentFixture<CardKayakComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardKayakComponent]
    });
    fixture = TestBed.createComponent(CardKayakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
