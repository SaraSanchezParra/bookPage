import { Component } from '@angular/core';
import { User } from 'src/app/models/user';
import { UsuarioService } from 'src/app/shared/usuario.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  public userData : User

  constructor(public usuarioServicio:UsuarioService){
    this.userData = this.usuarioServicio.user;


  }




  public enviar(newName: string, newLast_name: string, newEmail: string, newUrl: string)
  {

    this.userData.name = newName;
    this.userData.last_name = newLast_name;
    this.userData.email = newEmail;
    this.userData.photo = newUrl;

  }

}
