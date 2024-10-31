import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardEsquiComponent } from './card-esqui.component';

describe('CardEsquiComponent', () => {
  let component: CardEsquiComponent;
  let fixture: ComponentFixture<CardEsquiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardEsquiComponent]
    });
    fixture = TestBed.createComponent(CardEsquiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
