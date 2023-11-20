import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ServiciosPage } from './servicios/servicios.page';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'registrar-servicio',
    loadChildren: () => import('./registrar-servicio/registrar-servicio.module').then( m => m.RegistrarServicioPageModule)
  },
  {
    path: 'registrar-proveedor',
    loadChildren: () => import('./registrar-proveedor/registrar-proveedor.module').then( m => m.RegistrarProveedorPageModule)
  },
  {
    path: 'registrar-cliente',
    loadChildren: () => import('./registrar-cliente/registrar-cliente.module').then( m => m.RegistrarClientePageModule)
  },
  {
    path: 'reset-password',
    loadChildren: () => import('./reset-password/reset-password.module').then( m => m.ResetPasswordPageModule)
  },
  {
    path: 'servicios',
    loadChildren: () => import('./servicios/servicios.module').then( m => m.ServiciosPageModule)
  },
  {
    path: 'agendar-hora',
    loadChildren: () => import('./agendar-hora/agendar-hora.module').then( m => m.AgendarHoraPageModule)
  },
  {
    path: 'servicios-mas-vendidos',
    loadChildren: () => import('./servicios-mas-vendidos/servicios-mas-vendidos.module').then( m => m.ServiciosMasVendidosPageModule)
  },
  
  {
    path: 'admin-servicios',
    loadChildren: () => import('./admin-servicios/admin-servicios.module').then( m => m.AdminServiciosPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
