import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ServiciosMasVendidosPage } from './servicios-mas-vendidos.page';

describe('ServiciosMasVendidosPage', () => {
  let component: ServiciosMasVendidosPage;
  let fixture: ComponentFixture<ServiciosMasVendidosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ServiciosMasVendidosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
