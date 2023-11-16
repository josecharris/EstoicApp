import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { LecturaPasoParametrosService } from 'src/app/service/lectura-paso-parametros.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-contenedor-lectura',
  templateUrl: './contenedor-lectura.page.html',
  styleUrls: ['./contenedor-lectura.page.scss'],
})

/** 
 * <b>Descripción:</b> Componente que determina el componente para la administración
 * de lecturas<br>
 * @autor jcharris
*/
export class ContenedorLecturaPage implements OnInit {

  /** Atributo que determina el título del libro */
  public tituloLibro: string = "";

  /** Atributo que determina el nombre del archivo */
  public nombreArchivo: string = "";

  /** Atributo que determina el nombre del libro */
  public nombreLibro: string = "";

  /** Atributo que determina el nombre del autor del libro */
  public autorLibro: string = "";

  /** Atributo que determina la descripción del libro */
  public descLibro: string = "";

  /** Atributo que determina la descripción adicional */
  public descAdicional: string = "";

  /** Atributo que determina la cita del autor */
  public cita: string = "";

  /** Atributo que determina la cantidad */
  public cantidad = 0;

  /** Atributo que determina el indicador si se muestra el visor PDF */
  public mostrarVisorPDF = false;

  /** Atributo que determina la ruta del nombre del PDF*/
  public rutaPDFnombre: string = "";

  /** 
   * <b>Descripción:</b> constructor del componente<br>
   * @author jcharris
   * @param lecturaPasoParametrosService Servicio que determina el paso de información entre componentes
   * @param router  Parámetro que determina la navegación entre componentes
  */
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
        this.nombreArchivo = this.lecturaPasoParametrosService.infoLibro.get("nombreArchivo")!;
        this.cita = this.lecturaPasoParametrosService.infoLibro.get("cita")!;
        this.rutaPDFnombre = "/assets/files/pdf/" + this.nombreArchivo;
        this.mostrarVisorPDF = false;
      });
  }

  /**
   * <b>Descripción:</b> Determina la construcción del componente<br>
   * @author jcharris
  */
  ngOnInit() {
  }

  /**
   * <b>Descripción:</b> Método encargado de redirigir a la pantalla para volver al componente
   * que navegó al actual<br>
   * @author jcharris
  */
  public volver(): void{
    this.router.navigate(['/tab-inicial/lecturas']);
  }

  /**
   * <b>Descripción:</b> Método encargado de mostrar el visor PDF<br>
   * @author jcharris
  */
  public mostrarLibro( ): void {
    this.mostrarVisorPDF = true;
  }

}
