import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParacaidismoComponent } from './paracaidismo.component';

describe('ParacaidismoComponent', () => {
  let component: ParacaidismoComponent;
  let fixture: ComponentFixture<ParacaidismoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParacaidismoComponent]
    });
    fixture = TestBed.createComponent(ParacaidismoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
