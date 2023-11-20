import { Component, OnInit, ViewChild } from '@angular/core';
import {ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { IonModal } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage {

  
  constructor(private router:Router, private activeRouter:ActivatedRoute) { }
  public mensaje = "";
  public estado: String = "";
  public alertButtons = ['OK'];
  ngOnInit() {
  }
  irACliente() {
    this.router.navigate(['/servicios']); // Navega a la página de inicio de sesión
  }
  irAEmpleado() {
    this.router.navigate(['/home']); // Navega a la página de inicio de sesión
  }
  irACrearCuenta() {
    this.router.navigate(['/registrar-cliente']); // Navega a la página de inicio de sesión
  }

 }