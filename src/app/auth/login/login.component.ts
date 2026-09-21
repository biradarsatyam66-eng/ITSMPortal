import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';

import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  loginError = '';

  submitted = false;

  constructor(private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.loginForm = new FormGroup({

      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),

      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ])

    });

  }

  onLogin(): void {

  this.submitted = true;
  this.loginError = '';

  if (this.loginForm.invalid) {
    return;
  }

  const email = this.loginForm.value.email;
  const password = this.loginForm.value.password;

  const isLoginSuccess = this.authService.login(email, password);

  if (isLoginSuccess) {

    this.router.navigate(['/dashboard']);

  } else {

    this.loginError = 'Invalid email or password';

  }

}

}
