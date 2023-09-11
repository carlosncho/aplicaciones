import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.page.html',
  styleUrls: ['./asistencia.page.scss'],
})
export class AsistenciaPage implements OnInit {

  formularioAsistencia : FormGroup;

  constructor(public fb: FormBuilder, public alertController: AlertController) {

    this.formularioAsistencia = this.fb.group({
      'nombre': new FormControl("", Validators.required),
      'rut': new FormControl("",Validators.required)
    })
  }

  ngOnInit() {
  }

  async registrar(){
    var f = this.formularioAsistencia.value;
    
    if (this.formularioAsistencia.invalid){
      const alert= await this.alertController.create({
        header: 'Datos incompletos',
        message: 'Tienes que llenar todos los datos',
        buttons: ['Aceptar']
      });
      
      await alert.present();
      return;
    }
  
    var alumno= {
      nombre: f.nombre,
      rut: f.rut
    }

    localStorage.setItem('alumno',JSON.stringify(alumno));
  
  }
}
