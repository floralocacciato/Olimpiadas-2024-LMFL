import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TirolesaComponent } from './tirolesa.component';

describe('TirolesaComponent', () => {
  let component: TirolesaComponent;
  let fixture: ComponentFixture<TirolesaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TirolesaComponent]
    });
    fixture = TestBed.createComponent(TirolesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
