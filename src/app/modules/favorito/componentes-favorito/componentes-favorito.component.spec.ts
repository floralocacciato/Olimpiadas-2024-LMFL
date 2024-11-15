import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentesFavoritoComponent } from './componentes-favorito.component';

describe('ComponentesFavoritoComponent', () => {
  let component: ComponentesFavoritoComponent;
  let fixture: ComponentFixture<ComponentesFavoritoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentesFavoritoComponent]
    });
    fixture = TestBed.createComponent(ComponentesFavoritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
