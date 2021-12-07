import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientRegistrationComponent } from './patient-registration/patient-registration.component';
import { PatientDashboardComponent } from './patient-dashboard/patient-dashboard.component';



@NgModule({
  declarations: [
    PatientRegistrationComponent,
    PatientDashboardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PatientModule { }
