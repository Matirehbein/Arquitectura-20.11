import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agendar-hora',
  templateUrl: './agendar-hora.page.html',
  styleUrls: ['./agendar-hora.page.scss'],
})
export class AgendarHoraPage  {

  AgenHora: string = '';

  constructor(public alertController: AlertController, private router: Router) {}

  async agendarHora() {
    // Aquí puedes realizar la lógica para agendar la hora
    // Por ejemplo, puedes almacenar la hora en una variable o enviarla a un servicio
  
    // Muestra un mensaje después de agendar la hora
    const alert = await this.alertController.create({
      header: 'Hora agendada',
      message: `Se ha agendado la hora: ${this.AgenHora}`,
      buttons: [
        {
          text: 'OK',
          handler: () => {
            // Navega a la página de inicio después de presionar "OK"
            this.router.navigate(['/home']);
          }
        }
      ]
    });
  
    await alert.present();
  }
   }
