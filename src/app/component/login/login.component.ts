import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user';
import { UsuarioService } from 'src/app/shared/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public user: User

  constructor(private userService: UsuarioService, private router: Router)
  {
    this.user = new User(0, "", "", "", "", "");
  }
  onSubmit(form:NgForm){
    this.userService.login(this.user).subscribe(data=> {
      console.log(data);
      this.userService.logueado=true;
      this.userService.user = data[0];
      this.router.navigate(['/books']);
    });
  console.log(form.value)
  console.log(this.user)
  }
}
