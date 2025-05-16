import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaisonFormComponent } from './maison-form.component';

describe('MaisonFormComponent', () => {
  let component: MaisonFormComponent;
  let fixture: ComponentFixture<MaisonFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaisonFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaisonFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
