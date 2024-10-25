import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCiclismoComponent } from './card-ciclismo.component';

describe('CardCiclismoComponent', () => {
  let component: CardCiclismoComponent;
  let fixture: ComponentFixture<CardCiclismoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardCiclismoComponent]
    });
    fixture = TestBed.createComponent(CardCiclismoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
