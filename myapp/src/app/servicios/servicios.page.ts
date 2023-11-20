import { Component, OnInit, ViewChild } from '@angular/core';
import {ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { IonModal } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.page.html',
  styleUrls: ['./servicios.page.scss'],
})
export class ServiciosPage implements OnInit {

  constructor(private router:Router, private activeRouter:ActivatedRoute) { }
  public mensaje = "";
  public estado: String = "";
  public alertButtons = ['OK'];

  ngOnInit() {
  }
  irAHorario() {
    this.router.navigate(['/agendar-hora']); // Navega a la página de inicio de sesión
  }

}
