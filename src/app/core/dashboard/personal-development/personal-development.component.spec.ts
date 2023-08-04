import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalDevelopmentComponent } from './personal-development.component';

describe('PersonalDevelopmentComponent', () => {
  let component: PersonalDevelopmentComponent;
  let fixture: ComponentFixture<PersonalDevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalDevelopmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
