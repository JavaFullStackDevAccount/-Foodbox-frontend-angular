import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CredentialsStorageService } from 'src/app/Services/credentials-storage.service';
import { FoodboxUserService } from 'src/app/Services/foodbox-user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(
    private _foodBoxUserService: FoodboxUserService,
    private _credentialsStorageService: CredentialsStorageService,
    private _router: Router
  ) {}

  ngOnInit(): void {}

  loginFormSubmit() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.controls;

      this._foodBoxUserService
        .attemptLogin({ username: username.value, password: password.value })
        .subscribe(
          (response: any) => {
            if (response) {
              this._credentialsStorageService.saveCredentials(response);
              this._router.navigateByUrl('/');
            } else alert('Unable to login , wrong username or password !!!');
          },
          (err) => alert('Unable to login , wrong username or password !!!')
        );
    } else {
      alert('All fields are required !!!');
    }
  }
}
