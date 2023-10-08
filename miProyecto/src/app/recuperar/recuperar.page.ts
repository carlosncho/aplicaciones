import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage implements OnInit {

  formularioRecup: FormGroup;

  constructor(public fb: FormBuilder, public alertController: AlertController) {
    this.formularioRecup = this.fb.group({
      'nickname': new FormControl("", Validators.required),
      'password': new FormControl("", Validators.required),
      'nuevaPassword': new FormControl("", Validators.required)
    });
  }

  ngOnInit() {
  }

  async confirmar() {
    var f = this.formularioRecup.value;
  
    // Obtener el usuario del localStorage
    var usuarioString = localStorage.getItem('usuario');
  
    if (usuarioString) {
      var usuario = JSON.parse(usuarioString);
  
      if (usuario.nickname === f.nickname && usuario.password !== f.password) {
        // Cambiar la contraseña
        usuario.password = f.nuevaPassword;
  
        // Actualizar el objeto en el localStorage
        localStorage.setItem('usuario', JSON.stringify(usuario));
  
        console.log("Contraseña cambiada con éxito");
        const alert = await this.alertController.create({
          header: 'Contraseña cambiada',
          message: 'Tu contraseña ha sido cambiada con éxito',
          buttons: ['Aceptar']
        });
  
        await alert.present();
      } else {
        const alert = await this.alertController.create({
          header: 'Datos incorrectos',
          message: 'La contraseña actual no es válida',
          buttons: ['Aceptar']
        });
  
        await alert.present();
      }
    } else {
      // Manejar el caso en el que 'usuario' no está en el localStorage
      console.error("No se encontró el usuario en el localStorage");
    }
  }
}