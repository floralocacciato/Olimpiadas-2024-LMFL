import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardEscaladaComponent } from './card-escalada.component';

describe('CardEscaladaComponent', () => {
  let component: CardEscaladaComponent;
  let fixture: ComponentFixture<CardEscaladaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardEscaladaComponent]
    });
    fixture = TestBed.createComponent(CardEscaladaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
