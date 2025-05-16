import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuartierDetailComponent } from './quartier-detail.component';

describe('QuartierDetailComponent', () => {
  let component: QuartierDetailComponent;
  let fixture: ComponentFixture<QuartierDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuartierDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuartierDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
