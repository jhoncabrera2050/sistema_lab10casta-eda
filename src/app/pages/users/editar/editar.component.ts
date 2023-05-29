import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/models/users';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  usuarioForm: FormGroup;
  id: string | null;

  constructor(
    private fb: FormBuilder,
    private aRouter: ActivatedRoute,
    private router: Router,
    private _usuarioService: UserService){
      this.usuarioForm = this.fb.group({
        username: ['', Validators.required],
        password: ['', Validators.required],
        email: ['', Validators.required]
      })
      this.id = aRouter.snapshot.paramMap.get('id');
    }

  ngOnInit(): void {
    this.validarId();
  }

  validarId(){
    if(this.id !== null){
      this._usuarioService.verUsuario(this.id).subscribe(data => {
        this.usuarioForm.setValue({
          username: data.username,
          password: data.password,
          email: data.email
        })
      })
    }
  }

  editarUsuario(){
    const USUARIO: Usuario = {
      username: this.usuarioForm.get('username')?.value,
      password: this.usuarioForm.get('password')?.value
    }

    Swal.fire({
      title: 'Actualización de Usuario',
      text: '¿Desea actualizar el producto?',
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        if(this.id !== null){
          this._usuarioService.actualizarUsuario(this.id, USUARIO).subscribe(data => {
            console.log(USUARIO);
            this.router.navigate(['/listar-usuarios'])
          })
        }
      }
    })
  }

}
