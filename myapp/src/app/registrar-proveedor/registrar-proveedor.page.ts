import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-proveedor',
  templateUrl: './registrar-proveedor.page.html',
  styleUrls: ['./registrar-proveedor.page.scss'],
})
export class RegistrarProveedorPage {
  constructor(
    private toastController: ToastController,
    private router: Router
  ) {}

  async registrarProveedor() {
    // Lógica para registrar el proveedor (ajusta según tus necesidades)

    // Mostrar mensaje emergente (toast) al registrar con éxito
    const toast = await this.toastController.create({
      message: 'Proveedor registrado con éxito',
      duration: 2000, // Duración del mensaje en milisegundos
      position: 'bottom', // Posición del mensaje emergente
      color: 'success', // Color del mensaje
      buttons: [
        {
          text: 'OK',
          role: 'cancel',
          handler: () => {
            // Redireccionar al home al hacer clic en OK
            this.router.navigate(['/home']);
          },
        },
      ],
    });

    toast.present();
  }
}

