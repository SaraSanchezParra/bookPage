import { Component } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  public userData : User

  constructor(){
    this.userData = new User(1865, "Ana", "Beligo", "anabeligo@gmail.com", "https://aishlatino.com/wp-content/uploads/2021/11/que-tipo-de-persona-te-gustaria-ser-730x411-SP.jpg", "Casa123")
  }




  public enviar(newName: string, newLast_name: string, newEmail: string, newUrl: string)
  {

    this.userData.name = newName;
    this.userData.last_name = newLast_name;
    this.userData.email = newEmail;
    this.userData.photo = newUrl;

  }

}
