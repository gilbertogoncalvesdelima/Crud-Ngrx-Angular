import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import { UsuarioModel } from '../Models/UsuarioModel';
import { AppState } from '../Store/app-state';
import * as fromUsuariosSelector from '../Store/usuarios/usuarios.reducer';
@Component({
  selector: 'app-lista-usuarios-admin',
  templateUrl: './lista-usuarios-admin.component.html',
  styleUrls: ['./lista-usuarios-admin.component.scss']
})
export class ListaUsuariosAdminComponent implements OnInit {
  // Jeito 1
  listaUsuarios$ : Observable<UsuarioModel[]> = this.store.select(fromUsuariosSelector.getUsuariosAdministradores);
  
  // Jeito 2
  listaUsuarios2: UsuarioModel[]= [];
  
  // Jeito 3
  listaUsuarios3: UsuarioModel[]= [];

  // Jeito 4
  listaUsuarios4: UsuarioModel[]= [];

  // Jeito 5
  listaUsuarios5$ : Observable<UsuarioModel[]> = this.store.select(fromUsuariosSelector.getUsuariosAdministradoresPorParametro,{perfil: 'Administrador'})

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {

    // Jeito 2
    this.store
      .select(fromUsuariosSelector.getUsuariosAdministradores)
      .subscribe((usuarios: UsuarioModel[])=>{
          this.listaUsuarios2 = usuarios;
    });


    // Jeito 3
    this.store
      .select(fromUsuariosSelector.getUsuarios)
      .subscribe((usuarios: UsuarioModel[])=>{
          this.listaUsuarios3 = usuarios.filter((filter)=>filter.perfil == 'Administrador');
    });

    // Jeito 4
    this.store
      .select(fromUsuariosSelector.getUsuariosAdministradoresPorParametro,{perfil: 'Administrador'})
      .subscribe((usuarios: UsuarioModel[])=>{
        this.listaUsuarios4 = usuarios;
    });

  }

}
