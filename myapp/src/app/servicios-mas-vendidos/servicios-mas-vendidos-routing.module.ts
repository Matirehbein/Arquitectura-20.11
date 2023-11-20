import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServiciosMasVendidosPage } from './servicios-mas-vendidos.page';

const routes: Routes = [
  {
    path: '',
    component: ServiciosMasVendidosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServiciosMasVendidosPageRoutingModule {}
