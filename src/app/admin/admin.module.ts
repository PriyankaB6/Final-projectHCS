import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CorporateRegisterationComponent } from './corporate-registeration/corporate-registeration.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
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
import {MatIconModule} from '@angular/material/icon';
import { SharedModule } from '../shared/shared.module';
import { InboxComponent } from './inbox/inbox.component';
import { NursePatientInfoComponent } from './nurse/nurse-patient-info/nurse-patient-info.component';


const routes2: Routes = [
 
  {
    path: 'dashboard',
    children: [
      { path: '', component: AdminDashboardComponent },
      { path: 'registration', component: CorporateRegisterationComponent,outlet:'second' },
    ],
  },
]


@NgModule({
  declarations: [
    CorporateRegisterationComponent,
    AdminDashboardComponent,
    InboxComponent,
    NursePatientInfoComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes2),
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
    MatIconModule,
    MatExpansionModule,
   
    MatToolbarModule,
    MatCardModule,
 
  ],


})

export class AdminModule { }
