import { Component } from '@angular/core';

@Component({
  selector: 'app-servicios-mas-vendidos',
  templateUrl: './servicios-mas-vendidos.page.html',
  styleUrls: ['./servicios-mas-vendidos.page.scss'],
})
export class ServiciosMasVendidosPage {

  servicios = [
    {
      nombre: 'Servicio Cambio de Aceite',
      descripcion: 'Se ha solicitado 16 veces',
      imagen: 'assets/icon/aceite.jpg'  // Actualiza esta línea con el nombre correcto de tu imagen
    },
    {
      nombre: 'Servicio Revision de Luces',
      descripcion: 'Se ha solicitado 10 veces',
      imagen: 'assets/icon/luces.jpg'
    },
    {
      nombre: 'Servicio Revision General',
      descripcion: 'Se ha soliciato 7 veces',
      imagen: 'assets/icon/general.jpg'
    }
  ];

  constructor() {}

}