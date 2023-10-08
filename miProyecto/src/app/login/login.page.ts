import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  formularioLogin: FormGroup;

  constructor(public fb: FormBuilder, public  alertController: AlertController) {

    this.formularioLogin = this.fb.group({
      'nickname': new FormControl("", Validators.required),
      'password': new FormControl("", Validators.required)
    })

   }

  ngOnInit() {
  }


  async ingresar(){
    var f = this.formularioLogin.value;

    var usuario = JSON.parse(usuario.localStorage.getItem('usuario'));

    if (localStorage) {
      var usuarioJSON = localStorage.getItem('usuario');
      if (usuarioJSON) {
        var usuario = JSON.parse(usuarioJSON);
        // Resto del código
      } else {
        console.error('No se encontró el usuario en localStorage.');
      }
    } else {
      console.error('localStorage no está disponible en este entorno.');
    }
    

    if (!usuario) {
      const alert = await this.alertController.create({
        header: 'Usuario no encontrado',
        message: 'El usuario ingresado no existe, por favor regístrese',
        buttons: ['Aceptar']
      });
      await alert.present();
      return;
    }

    if(usuario.nickname == f.nickname && usuario.password == f.password){
      console.log("ingresado");
    }else{
      const alert= await this.alertController.create({
        header: 'Datos incorrectos',
        message: 'Los datos que ingreso son incorrecotos, vuelva intertar',
        buttons: ['Aceptar']
      });
    
      await alert.present();
      return;
    }
  
  }
  
}
