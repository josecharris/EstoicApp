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
        this.lecturaPasoParametrosService.infoLibro.set("nombreLibro", "Enquiridion");
        this.lecturaPasoParametrosService.infoLibro.set("autorLibro", "Epicteto");
        this.lecturaPasoParametrosService.infoLibro.set("descLibro", "Descripción del libro");
        break;
      case 3:
        this.lecturaPasoParametrosService.infoLibro.set("nombreLibro", "Enquiridion");
        this.lecturaPasoParametrosService.infoLibro.set("autorLibro", "Epicteto");
        this.lecturaPasoParametrosService.infoLibro.set("descLibro", "Descripción del libro");
        break;
      case 4:
        break;
      case 5:
        break;
      case 6:
        break;
      case 7:
        break;
      case 8:
        break;
      case 9:
        break;
      case 10:
        break;
      case 11:
        break;
      case 12:
        break;
      case 13:
        break;
      case 14:
        break;
      case 15:
        break;
    }
    this.router.navigate(['/tab-inicial/contenedor-lectura']);
  }

  public volver(): void{
    this.router.navigate(['/tab-inicial/estudiar']);
  }

}
