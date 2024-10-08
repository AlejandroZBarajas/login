import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanionFormComponent } from './components/companion-form/companion-form.component';
import { CompanionDashboardComponent } from './components/companion-dashboard/companion-dashboard.component';



@NgModule({
  declarations: [
    CompanionFormComponent,
    CompanionDashboardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CompanionModule { }
