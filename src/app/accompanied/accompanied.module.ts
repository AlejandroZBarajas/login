import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccompaniedFormComponent } from './components/accompanied-form/accompanied-form.component';
import { AccompaniedDashboardComponent } from './components/accompanied-dashboard/accompanied-dashboard.component';



@NgModule({
  declarations: [
    AccompaniedFormComponent,
    AccompaniedDashboardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AccompaniedModule { }
