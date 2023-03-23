import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserAnswer } from 'src/app/models/user-answer';
import { UsuarioService } from 'src/app/shared/usuario.service';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent {
    public myForm: FormGroup;

    constructor(private formBuilder: FormBuilder, private userService:UsuarioService, public toastr: ToastrService, public router: Router){
      this.buildForm();
    }
    public register(){
      const user = this.myForm.value;
      console.log(user);
      this.userService.register(user).subscribe((data: UserAnswer) =>{
        console.log(data);
        if (data.mensaje != "-1"){
          this.toastr.success("Chachi te has registrado");
          this.router.navigate(["/loginPage"])
        } 
        else {
          this.toastr.error("Prueba de nuevo")
        }
      });
    }
    private buildForm(){
      const minPassLength = 8;

      this.myForm = this.formBuilder.group({
        name: [, Validators.required],
        last_name: [, Validators.required],
        email: [, [Validators.required, Validators.email]],
        photo:[, Validators.required],
        password:[, [Validators.required, Validators.minLength(minPassLength)]],
        password2: [, [Validators.required, this.checkPasswords]]
      });

    }
    private checkPasswords(control: AbstractControl){
    let resultado = {matchPassword: true};

    // console.log(control.parent);
    // console.log(control.parent?.value);
    // console.log(control);


    if (control.parent?.value.password == control.value)
      resultado = null;

    return resultado;
  }

}
