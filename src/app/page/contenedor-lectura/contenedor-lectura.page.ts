import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { LecturaPasoParametrosService } from 'src/app/service/lectura-paso-parametros.service';
import { filter } from 'rxjs/operators';
import { pdfDefaultOptions } from "ngx-extended-pdf-viewer";

@Component({
  selector: 'app-contenedor-lectura',
  templateUrl: './contenedor-lectura.page.html',
  styleUrls: ['./contenedor-lectura.page.scss'],
})
export class ContenedorLecturaPage implements OnInit {

  public tituloLibro: string = "";
  public nombreArchivo: string = "";
  public nombreLibro: string = "";
  public autorLibro: string = "";
  public descLibro: string = "";
  public descAdicional: string = "";
  public nombreSeparador: string = "";
  public cita: string = "";
  public cantidad = 0;
  public mostrarVisorPDF = false;
  public rutaPDFnombre: string = "";

  constructor( private lecturaPasoParametrosService: LecturaPasoParametrosService,
    private router: Router ) { 
      this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.tituloLibro = this.lecturaPasoParametrosService.infoLibro.get("nombreLibro")!;
        this.nombreLibro = this.lecturaPasoParametrosService.infoLibro.get("nombreLibro")!;
        this.autorLibro = this.lecturaPasoParametrosService.infoLibro.get("autorLibro")!;
        this.descLibro = this.lecturaPasoParametrosService.infoLibro.get("descLibro")!;
        this.tituloLibro = this.lecturaPasoParametrosService.infoLibro.get("nombreLibro")!;
        this.descAdicional = this.lecturaPasoParametrosService.infoLibro.get("descAdicional")!;
        this.nombreSeparador = this.lecturaPasoParametrosService.infoLibro.get("nombreSeparador")!;
        this.nombreArchivo = this.lecturaPasoParametrosService.infoLibro.get("nombreArchivo")!;
        this.cita = this.lecturaPasoParametrosService.infoLibro.get("cita")!;
        this.rutaPDFnombre = "/assets/files/pdf/" + this.nombreArchivo;
        this.mostrarVisorPDF = false;
      });
    }

  ngOnInit() {
  }

  public volver(): void{
    this.router.navigate(['/tab-inicial/lecturas']);
  }

  public getRange(value: number): number[] {
    return new Array(value);
  }

  public mostrarLibro( ): void {
    this.mostrarVisorPDF = true;
  }
  

}
