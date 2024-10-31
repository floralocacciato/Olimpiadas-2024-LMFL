import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsquiComponent } from './esqui.component';

describe('EsquiComponent', () => {
  let component: EsquiComponent;
  let fixture: ComponentFixture<EsquiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EsquiComponent]
    });
    fixture = TestBed.createComponent(EsquiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
