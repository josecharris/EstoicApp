import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contenedor-lectura',
  templateUrl: './contenedor-lectura.page.html',
  styleUrls: ['./contenedor-lectura.page.scss'],
})
export class ContenedorLecturaPage implements OnInit {

  public title: string = "Nombre del contenedor";

  constructor() { }

  ngOnInit() {
  }

}
