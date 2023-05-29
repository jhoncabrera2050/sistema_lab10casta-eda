import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearProductosComponent } from './pages/productos/crear-productos/crear-productos.component';
import { EditarProductosComponent } from './pages/productos/editar-productos/editar-productos.component';
import { ListarProductosComponent } from './pages/productos/listar-productos/listar-productos.component';
import { CreateUserComponent } from './pages/users/create-user/create-user.component';
import { LoginComponent } from './pages/users/login/login.component';

import { ListarComponent } from './pages/users/listar/listar.component';
import { EditarComponent } from './pages/users/editar/editar.component';

import { authGuard } from "./auth.guard";

const routesInicio: Routes = [
  { path: '', component: LoginComponent },
  { path: 'crear-usuario', component: CreateUserComponent},
  { path: 'listar-usuarios', component: ListarComponent},
  { path: 'editar-usuario/:id', component: EditarComponent},

  { path: 'listar-productos', component: ListarProductosComponent, canActivate: [authGuard]},
  { path: 'crear-productos', component: CrearProductosComponent, canActivate: [authGuard]},
  { path: 'editar-producto/:id', component: EditarProductosComponent, canActivate: [authGuard]},
  { path: '**', redirectTo: '', pathMatch: 'full'}
];



@NgModule({
  imports: [RouterModule.forRoot(routesInicio)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
