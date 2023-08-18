import { Component, OnInit } from '@angular/core';
import { LecturaPasoParametrosService } from 'src/app/service/lectura-paso-parametros.service';

@Component({
  selector: 'app-contenedor-lectura',
  templateUrl: './contenedor-lectura.page.html',
  styleUrls: ['./contenedor-lectura.page.scss'],
})
export class ContenedorLecturaPage implements OnInit {

  public tituloLibro: string = "";
  public nombreLibro: string = "";
  public autorLibro: string = "";
  public descLibro: string = "";

  constructor( private lecturaPasoParametrosService: LecturaPasoParametrosService ) { }

  ngOnInit() {
    this.tituloLibro = this.lecturaPasoParametrosService.infoLibro.get("nombreLibro")!;
    this.nombreLibro = this.lecturaPasoParametrosService.infoLibro.get("nombreLibro")!;
    this.autorLibro = this.lecturaPasoParametrosService.infoLibro.get("autorLibro")!;
    this.descLibro = this.lecturaPasoParametrosService.infoLibro.get("descLibro")!;
  }

}
