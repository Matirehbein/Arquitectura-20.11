import { Component, OnInit, ViewChild } from '@angular/core';
import {ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { IonModal } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router:Router, private activeRouter:ActivatedRoute) { }
  public mensaje = "";
  public estado: String = "";
  public alertButtons = ['OK'];
  ngOnInit() {
  }
  irAservicio() {
    this.router.navigate(['/servicios']); // Navega a la página de inicio de sesión
  }
  irAProveedor() {
    this.router.navigate(['/registrar-proveedor']); // Navega a la página de inicio de sesión
  }

 }