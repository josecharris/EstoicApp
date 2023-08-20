import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { LecturaPasoParametrosService } from 'src/app/service/lectura-paso-parametros.service';
import { filter } from 'rxjs/operators';

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
  public noCapitulos = 0;

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
        this.noCapitulos = Number(this.lecturaPasoParametrosService.infoLibro.get("noCapitulos")!);
      });
    }

  ngOnInit() {
  }

  public volver(): void{
    this.router.navigate(['/tab-inicial/lecturas']);
  }

  getRange(value: number): number[] {
    return new Array(value);
  }

  public navegarCapitulo( numeroLibro: number ): void {
    
  }
  

}
