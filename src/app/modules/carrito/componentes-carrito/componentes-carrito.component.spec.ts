import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentesCarritoComponent } from './componentes-carrito.component';

describe('ComponentesCarritoComponent', () => {
  let component: ComponentesCarritoComponent;
  let fixture: ComponentFixture<ComponentesCarritoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentesCarritoComponent]
    });
    fixture = TestBed.createComponent(ComponentesCarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
