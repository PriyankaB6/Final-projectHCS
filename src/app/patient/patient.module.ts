import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientRegistrationComponent } from './patient-registration/patient-registration.component';
import { PatientDashboardComponent } from './patient-dashboard/patient-dashboard.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTreeModule } from '@angular/material/tree';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import {Ng2TelInputModule} from 'ng2-tel-input';
import { MatRadioModule } from '@angular/material/radio';

import { MatGridListModule } from '@angular/material/grid-list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PatientDemographicInfoComponent } from './patient-demographic-info/patient-demographic-info.component';

const routes3: Routes = [
  { path: 'dashboard', component: PatientDashboardComponent },
  { path: 'registration', component: PatientRegistrationComponent },
]




@NgModule({
  declarations: [
    PatientRegistrationComponent,
    PatientDashboardComponent,
    PatientDemographicInfoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes3),
    SharedModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    MatCardModule,
    MatAutocompleteModule,
    MatDialogModule,
    MatTreeModule,
    MatSidenavModule,
    Ng2TelInputModule,
    MatExpansionModule,
    MatRadioModule,
    MatToolbarModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
  ]
})
export class PatientModule { }
