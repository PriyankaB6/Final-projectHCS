import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CorporateRegisterationComponent } from './corporate-registeration/corporate-registeration.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';



@NgModule({
  declarations: [
    CorporateRegisterationComponent,
    AdminDashboardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
