import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlpinismoComponent } from './alpinismo.component';

describe('AlpinismoComponent', () => {
  let component: AlpinismoComponent;
  let fixture: ComponentFixture<AlpinismoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlpinismoComponent]
    });
    fixture = TestBed.createComponent(AlpinismoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
