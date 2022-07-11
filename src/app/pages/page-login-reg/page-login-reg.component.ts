import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { DataLibService } from 'src/services/data-lib.service';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from "@angular/forms";

@Component({
  selector: 'app-page-login-reg',
  templateUrl: './page-login-reg.component.html',
  styleUrls: ['./page-login-reg.component.scss']
})
export class PageLoginRegComponent implements OnInit {
  loginForm: FormGroup
  registerForm: FormGroup
  isRegis = false
  isAuthenticated = "true"
  constructor(private router: Router, private sharedDataService: DataLibService, private fb: FormBuilder) {
    this.loginForm = fb.group({
      username: [
        null,
        [Validators.required, Validators.pattern(/^(admin|user)$/)],
      ],
      password: [
        null,
        [Validators.required],
      ],
    });
    this.registerForm = fb.group({
      firstname: [
        null,
        [Validators.required],
      ],
      lastname: [
        null,
        [Validators.required],
      ],
      username: [
        null,
        [Validators.required, Validators.pattern(/^(admin|user)$/)],
      ],
      password: [
        null,
        [Validators.required],
      ],
    });
  }

  ngOnInit(): void {
  }

  doRegister() {
    debugger
      this.isRegis = false
      console.log(this.registerForm.value)
  }

  doLogin() {
      this.router.navigateByUrl('/');
      this.sharedDataService.changeMessage(this.isAuthenticated);
      localStorage.setItem("Login", this.isAuthenticated);
      setTimeout(() => {
        window.location.reload()
      }, 500)
  }

  toRegis() {
    this.isRegis = true
  }
  toLogin() {
    this.isRegis = false
  }

}
