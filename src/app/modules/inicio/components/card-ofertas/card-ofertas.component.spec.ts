import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardOfertasComponent } from './card-ofertas.component';

describe('CardOfertasComponent', () => {
  let component: CardOfertasComponent;
  let fixture: ComponentFixture<CardOfertasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardOfertasComponent]
    });
    fixture = TestBed.createComponent(CardOfertasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
