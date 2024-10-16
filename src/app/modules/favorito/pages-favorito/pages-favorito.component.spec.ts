import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesFavoritoComponent } from './pages-favorito.component';

describe('PagesFavoritoComponent', () => {
  let component: PagesFavoritoComponent;
  let fixture: ComponentFixture<PagesFavoritoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagesFavoritoComponent]
    });
    fixture = TestBed.createComponent(PagesFavoritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
