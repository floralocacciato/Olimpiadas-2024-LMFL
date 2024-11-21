import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuceoComponent } from './buceo.component';

describe('BuceoComponent', () => {
  let component: BuceoComponent;
  let fixture: ComponentFixture<BuceoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuceoComponent]
    });
    fixture = TestBed.createComponent(BuceoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
