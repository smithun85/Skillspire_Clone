import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalDevelopmentComponent } from './professional-development.component';

describe('ProfessionalDevelopmentComponent', () => {
  let component: ProfessionalDevelopmentComponent;
  let fixture: ComponentFixture<ProfessionalDevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessionalDevelopmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessionalDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
