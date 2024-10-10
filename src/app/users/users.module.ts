import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
import { FormComponent } from './components/form/form.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';



@NgModule({
  declarations: [
    FormComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    FormComponent,
    DashboardComponent
  ]
})
export class UsersModule { }
