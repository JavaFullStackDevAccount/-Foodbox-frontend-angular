import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FoodBoxUser } from 'src/app/Models/FoodBoxUser';
import { FoodboxUserService } from 'src/app/Services/foodbox-user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss', '../login/login.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('', [
      Validators.required,
      Validators.min(999999999),
      Validators.max(9999999999),
    ]),
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
  });
  constructor(private _foodBoxUserService: FoodboxUserService) {}

  ngOnInit(): void {}

  convertFormToFoodBoxUser(): FoodBoxUser {
    const { name, username, password, address, phoneNumber } =
      this.registerForm.controls;

    return new FoodBoxUser(
      0,
      
      name.value,
      username.value,
      password.value,
      address.value,
      phoneNumber.value,
      false
    );
  }
  registerFormSubmit() {
    if (this.registerForm.valid) {
      this._foodBoxUserService
        .attemptToRegister(this.convertFormToFoodBoxUser())
        .subscribe(
          (response: any) => {
            if (response) alert('Registration successfull ');
            else alert('Unable to register !!!');
          },
          (err) => alert('Unable to register !!!')
        );
    } else {
      alert('All fields are required !!!');
    }
  }
}
