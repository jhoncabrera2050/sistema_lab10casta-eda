import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/users';
import { UserService } from 'src/app/services/user.service'
import Swal from 'sweetalert2'

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  listUsuarios: Usuario[] = [];
  elementos: number = 0;

  constructor(private _userService: UserService) {

  }
  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  obtenerUsuarios(){
    this._userService.getUsuarios().subscribe(data => {
      console.log(data);
      this.listUsuarios = data;
      this.elementos = this.listUsuarios.length;
    })
  }

  eliminarUsuario(id:any){
    this._userService.deleteUsuario(id).subscribe(data => {

      Swal.fire({
        title: 'Eliminación de Usuario',
        text: '¿Desea eliminar el usuario?',
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          console.log(data);
          this.obtenerUsuarios();
          this.elementos = this.listUsuarios.length;
        }
      })
    })
  }
  
}
