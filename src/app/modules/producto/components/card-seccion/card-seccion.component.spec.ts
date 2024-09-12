import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSeccionComponent } from './card-seccion.component';

describe('CardSeccionComponent', () => {
  let component: CardSeccionComponent;
  let fixture: ComponentFixture<CardSeccionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardSeccionComponent]
    });
    fixture = TestBed.createComponent(CardSeccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
