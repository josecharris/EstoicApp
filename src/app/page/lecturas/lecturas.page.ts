import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LecturaPasoParametrosService } from 'src/app/service/lectura-paso-parametros.service';

@Component({
  selector: 'app-lecturas',
  templateUrl: './lecturas.page.html',
  styleUrls: ['./lecturas.page.scss'],
})
export class LecturasPage implements OnInit {

  constructor( private router: Router, private lecturaPasoParametrosService: LecturaPasoParametrosService ) { }

  ngOnInit() {
  }

  public navegarContenedorLectura( numeroLibro: number ): void {
    switch(numeroLibro){
      case 1:
        this.lecturaPasoParametrosService.infoLibro.set("nombreLibro", "Meditaciones");
        this.lecturaPasoParametrosService.infoLibro.set("autorLibro", "Marco Aurelio");
        this.lecturaPasoParametrosService.infoLibro.set("descLibro", "Descripción del libro");
        break;
      case 2:
        this.lecturaPasoParametrosService.infoLibro.set("nombreLibro", "Vidas y opiniones de los filósofos más ilustres");
        this.lecturaPasoParametrosService.infoLibro.set("autorLibro", "Diogenes Laercio");
        this.lecturaPasoParametrosService.infoLibro.set("descLibro", "Descripción del libro");
        break;
      case 3:
        this.lecturaPasoParametrosService.infoLibro.set("nombreLibro", "Cartas a Lucilio");
        this.lecturaPasoParametrosService.infoLibro.set("autorLibro", "Séneca");
        this.lecturaPasoParametrosService.infoLibro.set("descLibro", "Descripción del libro");
        break;
      case 4:
        this.lecturaPasoParametrosService.infoLibro.set("nombreLibro", "Sobre la brevedad de la vida");
        this.lecturaPasoParametrosService.infoLibro.set("autorLibro", "Séneca");
        this.lecturaPasoParametrosService.infoLibro.set("descLibro", "Descripción del libro");
        break;
      case 5:
        this.lecturaPasoParametrosService.infoLibro.set("nombreLibro", "Sobre la ira");
        this.lecturaPasoParametrosService.infoLibro.set("autorLibro", "Séneca");
        this.lecturaPasoParametrosService.infoLibro.set("descLibro", "Descripción del libro");
        break;
      case 6:
        this.lecturaPasoParametrosService.infoLibro.set("nombreLibro", "Sobre la constancia del sabio");
        this.lecturaPasoParametrosService.infoLibro.set("autorLibro", "Séneca");
        this.lecturaPasoParametrosService.infoLibro.set("descLibro", "Descripción del libro");
        break;
      case 7:
        this.lecturaPasoParametrosService.infoLibro.set("nombreLibro", "De la tranquilidad del ánimo");
        this.lecturaPasoParametrosService.infoLibro.set("autorLibro", "Séneca");
        this.lecturaPasoParametrosService.infoLibro.set("descLibro", "Descripción del libro");
        break;
      case 8:
        this.lecturaPasoParametrosService.infoLibro.set("nombreLibro", "De la tranquilidad del ánimo");
        this.lecturaPasoParametrosService.infoLibro.set("autorLibro", "Séneca");
        this.lecturaPasoParametrosService.infoLibro.set("descLibro", "Descripción del libro");
        break;
      case 9:
        this.lecturaPasoParametrosService.infoLibro.set("nombreLibro", "Enquiridion");
        this.lecturaPasoParametrosService.infoLibro.set("autorLibro", "Epicteto");
        this.lecturaPasoParametrosService.infoLibro.set("descLibro", "Descripción del libro");
        break;
      case 10:
        this.lecturaPasoParametrosService.infoLibro.set("nombreLibro", "Los Discursos o Disertaciones");
        this.lecturaPasoParametrosService.infoLibro.set("autorLibro", "Epicteto");
        this.lecturaPasoParametrosService.infoLibro.set("descLibro", "Descripción del libro");
        break;
      
    }
    this.router.navigate(['/tab-inicial/contenedor-lectura']);
  }

  public volver(): void{
    this.router.navigate(['/tab-inicial/estudiar']);
  }

}
