import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContenedorLecturaPage } from './contenedor-lectura.page';

describe('ContenedorLecturaPage', () => {
  let component: ContenedorLecturaPage;
  let fixture: ComponentFixture<ContenedorLecturaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ContenedorLecturaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
