import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorieListComponent } from './categorie-list.component';

describe('CategorieListComponent', () => {
  let component: CategorieListComponent;
  let fixture: ComponentFixture<CategorieListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategorieListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategorieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
