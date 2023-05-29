import { Component } from '@angular/core';
import { DataLoginService } from 'src/app/services/data-login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/users';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {

  user = {}

  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private dataLogin: DataLoginService
    ){
    this.registerForm = this.fb.group(
      {
        username: ['', Validators.required],
        password: ['', Validators.required],
        email: ['', Validators.required]
      }
    )
  }

  createUser(){

    const newUser: any = {
      username: this.registerForm.get('username')?.value,
      password: this.registerForm.get('password')?.value,
      email: this.registerForm.get('email')?.value
    }

    console.log(newUser)

    console.log(typeof(newUser))

    this.dataLogin.createUser(newUser)
      .subscribe(
        res => {
          console.log(res)
          this.router.navigate(['/'])
        },
        err => console.log(err)
      )   
  }
}
