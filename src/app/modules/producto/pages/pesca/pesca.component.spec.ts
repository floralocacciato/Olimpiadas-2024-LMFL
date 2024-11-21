import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PescaComponent } from './pesca.component';

describe('PescaComponent', () => {
  let component: PescaComponent;
  let fixture: ComponentFixture<PescaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PescaComponent]
    });
    fixture = TestBed.createComponent(PescaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
