import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { LoginService } from '../login.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

show() {
  this.typePassword = this.typePassword === 'password' ? 'text' : 'password';
}
    typePassword: string = "password";

    constructor(private loginService: LoginService){
      this.loadUserToTable();
    }

    users: User[] = [];
    userLogin: User= {
      username: '',
      password: ''
    }

    login(){
      debugger
      alert(this.loginService.loginService(this.userLogin));
    }

    loadUserToTable(){
      this.users = this.loginService.getAllUser();
      console.log(this.loginService.getAllUser());
    }

}
