import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientRegistrationComponent } from './patient-registration/patient-registration.component';
import { PatientDashboardComponent } from './patient-dashboard/patient-dashboard.component';
import { RouterModule, Routes } from '@angular/router';

const routes3: Routes = [
  { path: 'dashboard', component: PatientDashboardComponent },
  { path: 'registration', component: PatientRegistrationComponent },
]




@NgModule({
  declarations: [
    PatientRegistrationComponent,
    PatientDashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes3),
  ]
})
export class PatientModule { }
