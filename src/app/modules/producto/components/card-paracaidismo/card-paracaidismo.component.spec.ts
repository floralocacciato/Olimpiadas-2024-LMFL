import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardParacaidismoComponent } from './card-paracaidismo.component';

describe('CardParacaidismoComponent', () => {
  let component: CardParacaidismoComponent;
  let fixture: ComponentFixture<CardParacaidismoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardParacaidismoComponent]
    });
    fixture = TestBed.createComponent(CardParacaidismoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
