import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesCarritoComponent } from './pages-carrito.component';

describe('PagesCarritoComponent', () => {
  let component: PagesCarritoComponent;
  let fixture: ComponentFixture<PagesCarritoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagesCarritoComponent]
    });
    fixture = TestBed.createComponent(PagesCarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
