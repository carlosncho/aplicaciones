import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formularioRegistro: FormGroup;

  constructor(public fb: FormBuilder, public alertController: AlertController) {    
    this.formularioRegistro = this.fb.group({
      'nombre':new FormControl("", Validators.required),
      'apellido':new FormControl("", Validators.required),
      'rut':new FormControl("", Validators.required),
      'nickname':new FormControl("", Validators.required),
      'password':new FormControl("", Validators.required),
/*      'passwordConfirmacion ':new FormControl("", Validators.required)*/

    });
  }

  ngOnInit() {
  }

  async guardar(){
    var f = this.formularioRegistro.value;

    if(this.formularioRegistro.invalid){
      const alert= await this.alertController.create({
        header: 'Datos incompletos',
        message: 'Tienes que llenar todos los datos',
        buttons: ['Aceptar']
      });
      
      await alert.present();
      return;
    }else{
      console.log("se registro");
      
    }
  
    var usuario= {
      nombre: f.nombre,
      apellido: f.apellido,
      rut: f.rut,
      nickname: f.nickname,
      password: f.password,
      
    }

    localStorage.setItem('usuario',JSON.stringify(usuario));
  }

}
