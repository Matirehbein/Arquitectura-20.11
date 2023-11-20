import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServiciosMasVendidosPageRoutingModule } from './servicios-mas-vendidos-routing.module';

import { ServiciosMasVendidosPage } from './servicios-mas-vendidos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServiciosMasVendidosPageRoutingModule
  ],
  declarations: [ServiciosMasVendidosPage]
})
export class ServiciosMasVendidosPageModule {}
