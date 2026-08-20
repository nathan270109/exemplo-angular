import { Component, inject, signal } from '@angular/core';
import { Usuario } from './usuario';
import { ArrayUsuarioService } from './array-usuario-service';

@Component({
  selector: 'app-array-usuarios',
  imports: [],
  templateUrl: './array-usuarios.html',
  styleUrl: './array-usuarios.css',
})
export class ArrayUsuarios {

   protected readonly arrayUsuariosService = inject(ArrayUsuarioService)

}
