import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistrarServicioPage } from './registrar-servicio.page';

describe('RegistrarServicioPage', () => {
  let component: RegistrarServicioPage;
  let fixture: ComponentFixture<RegistrarServicioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RegistrarServicioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
