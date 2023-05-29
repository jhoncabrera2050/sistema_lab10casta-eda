import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/users';
import { DataLoginService } from 'src/app/services/data-login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent {

  user = {}
  
  loginForm: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router,
              private dataLogin: DataLoginService){
      this.loginForm = this.fb.group(
        {
            username: ['', Validators.required],
            password: ['', Validators.required]
        }
      )
  }

  loginUser(){

   const USER: Usuario = {
      username: this.loginForm.get('username')?.value,
      password: this.loginForm.get('password')?.value
    }

    this.dataLogin.getUser(USER)
      .subscribe(
        res => {
          console.log(res)
          localStorage.setItem('token', res.token)
          this.router.navigate(['/listar-productos'])
        },
        err => console.log(err)
      )

    

  }

}


