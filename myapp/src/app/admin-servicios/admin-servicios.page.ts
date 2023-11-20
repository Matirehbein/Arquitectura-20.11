import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-servicios',
  templateUrl: './admin-servicios.page.html',
  styleUrls: ['./admin-servicios.page.scss'],
})
export class AdminServiciosPage {
  servicios: string[] = [];
  nuevoServicio: string = '';

  agregarServicio() {
    if (this.nuevoServicio.trim() !== '') {
      this.servicios.push(this.nuevoServicio);
      this.nuevoServicio = '';
    }
  }

  eliminarServicio(servicio: string) {
    const index = this.servicios.indexOf(servicio);
    if (index > -1) {
      this.servicios.splice(index, 1);
    }
  }
}
