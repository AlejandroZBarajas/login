import { Component, NgModule } from '@angular/core';
import { User } from '../../models/user';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  users: User[] = []
  newUser: User = new User ('','','')

  toRegister(){
    this.users.push({...this.newUser})
    this.newUser = new User ('','','')
    console.log(this.users)
  }

}
