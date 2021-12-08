import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientDemographicInfoComponent } from './patient-demographic-info.component';

describe('PatientDemographicInfoComponent', () => {
  let component: PatientDemographicInfoComponent;
  let fixture: ComponentFixture<PatientDemographicInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientDemographicInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientDemographicInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
