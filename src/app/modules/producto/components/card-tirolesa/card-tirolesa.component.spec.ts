import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTirolesaComponent } from './card-tirolesa.component';

describe('CardTirolesaComponent', () => {
  let component: CardTirolesaComponent;
  let fixture: ComponentFixture<CardTirolesaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardTirolesaComponent]
    });
    fixture = TestBed.createComponent(CardTirolesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
