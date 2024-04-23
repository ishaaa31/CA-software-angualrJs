import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
clickButton: any;
emailOrPhone: any;
togglePassword() {
  
throw new Error('Method not implemented.');
}
  username!: string;
  password!: string;

  constructor(private router: Router) { }

  login(): void {
    console.log('Username:', this.username);
    console.log('Password:', this.password); 
    this.router.navigate([`/user-panel`]);
}
}
