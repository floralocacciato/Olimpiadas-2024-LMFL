import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAlpinismoComponent } from './card-alpinismo.component';

describe('CardAlpinismoComponent', () => {
  let component: CardAlpinismoComponent;
  let fixture: ComponentFixture<CardAlpinismoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardAlpinismoComponent]
    });
    fixture = TestBed.createComponent(CardAlpinismoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
