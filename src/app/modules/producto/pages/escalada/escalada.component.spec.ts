import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscaladaComponent } from './escalada.component';

describe('EscaladaComponent', () => {
  let component: EscaladaComponent;
  let fixture: ComponentFixture<EscaladaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EscaladaComponent]
    });
    fixture = TestBed.createComponent(EscaladaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
