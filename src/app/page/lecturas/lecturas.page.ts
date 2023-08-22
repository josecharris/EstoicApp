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
        this.lecturaPasoParametrosService.infoLibro.clear();
        this.lecturaPasoParametrosService.infoLibro.set("nombreLibro", "Meditaciones");
        this.lecturaPasoParametrosService.infoLibro.set("autorLibro", "Marco Aurelio");
        this.lecturaPasoParametrosService.infoLibro.set("descLibro", "Es una obra atemporal que desvela las reflexiones íntimas de uno de los emperadores más influyentes de la historia. En este viaje literario, descubre la sabiduría de un líder que enfrentó los desafíos del poder y la vida con una mente clara y serena, ofreciéndonos lecciones perdurables para cultivar la paz interior en medio del caos exterior.");
        this.lecturaPasoParametrosService.infoLibro.set("nombreSeparador", "Capítulos:");
        this.lecturaPasoParametrosService.infoLibro.set("nombreArchivo", "meditaciones.pdf");
        break;
      case 2:
        this.lecturaPasoParametrosService.infoLibro.clear();
        this.lecturaPasoParametrosService.infoLibro.set("nombreLibro", "Cartas a Lucilio");
        this.lecturaPasoParametrosService.infoLibro.set("autorLibro", "Séneca");
        this.lecturaPasoParametrosService.infoLibro.set("descLibro", "Un compendio íntimo y cautivador de sabiduría atemporal. Las epístolas de Séneca te guían a través de la vida, la virtud y el arte de vivir bien. Una conversación con un antiguo sabio que resuena poderosamente en el presente.");
        this.lecturaPasoParametrosService.infoLibro.set("descAdicional", "Este libro está compuesto por el siguiente número de cartas:");
        this.lecturaPasoParametrosService.infoLibro.set("nombreSeparador", "Cartas:");
        this.lecturaPasoParametrosService.infoLibro.set("cantidad", "124");
        break;
      case 3:
        this.lecturaPasoParametrosService.infoLibro.clear();
        this.lecturaPasoParametrosService.infoLibro.set("nombreLibro", "Sobre la brevedad de la vida");
        this.lecturaPasoParametrosService.infoLibro.set("autorLibro", "Séneca");
        this.lecturaPasoParametrosService.infoLibro.set("descLibro", "Un destello de claridad en un mundo fugaz. Séneca, el estoico, destila la esencia del tiempo en estas páginas conmovedoras. Un llamado a vivir plenamente en un instante, a abrazar la fugacidad y encontrar la eternidad en cada aliento.");
        this.lecturaPasoParametrosService.infoLibro.set("nombreSeparador", "Capítulos:");
        this.lecturaPasoParametrosService.infoLibro.set("cantidad", "21");
        break;
      case 4:
        this.lecturaPasoParametrosService.infoLibro.clear();
        this.lecturaPasoParametrosService.infoLibro.set("nombreLibro", "Sobre la ira");
        this.lecturaPasoParametrosService.infoLibro.set("autorLibro", "Séneca");
        this.lecturaPasoParametrosService.infoLibro.set("descLibro", "Un análisis magistral de una emoción poderosa. Séneca, el sabio estoico, desentraña los laberintos de la ira y ofrece el antídoto para la serenidad. Un viaje hacia el autocontrol en medio de las tormentas emocionales, destilando la calma del conocimiento antiguo.");
        this.lecturaPasoParametrosService.infoLibro.set("nombreSeparador", "Libros:");
        this.lecturaPasoParametrosService.infoLibro.set("cantidad", "3");
        break;
      case 5:
        this.lecturaPasoParametrosService.infoLibro.clear();
        this.lecturaPasoParametrosService.infoLibro.set("nombreLibro", "Sobre la constancia del sabio");
        this.lecturaPasoParametrosService.infoLibro.set("autorLibro", "Séneca");
        this.lecturaPasoParametrosService.infoLibro.set("descLibro", "Adéntrate en el mundo interior de la fortaleza inquebrantable con 'De la constancia del sabio'. Séneca, el maestro estoico, desentraña los secretos de la serenidad en medio de tormentas emocionales. En un diálogo íntimo con la virtud, descubre cómo el sabio navega las aguas tumultuosas de la vida con una constancia inamovible. Un camino luminoso hacia la tranquilidad en medio de las turbulencias del mundo.");
        this.lecturaPasoParametrosService.infoLibro.set("cantidad", "19");
        this.lecturaPasoParametrosService.infoLibro.set("nombreSeparador", "Capítulos:");
        break;
      case 6:
        this.lecturaPasoParametrosService.infoLibro.clear();
        this.lecturaPasoParametrosService.infoLibro.set("nombreLibro", "De la tranquilidad del ánimo");
        this.lecturaPasoParametrosService.infoLibro.set("autorLibro", "Séneca");
        this.lecturaPasoParametrosService.infoLibro.set("descLibro", "En un mundo agitado y tumultuoso, Séneca te invita a un viaje interior hacia la paz inquebrantable. En 'De la tranquilidad del ánimo', el sabio romano te guía con maestría a través de los laberintos de la vida, revelando el poder de la filosofía para liberarte de las cadenas de la ansiedad y conducirte a la serenidad que anhelas.");
        this.lecturaPasoParametrosService.infoLibro.set("cantidad", "15");
        this.lecturaPasoParametrosService.infoLibro.set("nombreSeparador", "Capítulos:");
        break;
      case 7:
        this.lecturaPasoParametrosService.infoLibro.clear();
        this.lecturaPasoParametrosService.infoLibro.set("nombreLibro", "Enquiridion");
        this.lecturaPasoParametrosService.infoLibro.set("autorLibro", "Epicteto");
        this.lecturaPasoParametrosService.infoLibro.set("descLibro", "Sumérgete en la esencia de la sabiduría estoica con 'Enchiridion', la obra atemporal de Epicteto. En sus breves pero poderosas palabras, encontrarás un manual para forjar una mentalidad resiliente en medio de las tormentas de la vida. Prepárate para abrazar la autodisciplina, el desapego y la serenidad en tu búsqueda de una vida plena y virtuosa");
        this.lecturaPasoParametrosService.infoLibro.set("nombreSeparador", "Enseñanzas:");
        this.lecturaPasoParametrosService.infoLibro.set("cantidad", "53");
        break;
      case 8:
        this.lecturaPasoParametrosService.infoLibro.clear();
        this.lecturaPasoParametrosService.infoLibro.set("nombreLibro", "Los Discursos o Disertaciones");
        this.lecturaPasoParametrosService.infoLibro.set("autorLibro", "Epicteto");
        this.lecturaPasoParametrosService.infoLibro.set("descLibro", "Sumérgete en las conversaciones íntimas con el maestro estoico Epicteto a través de 'Los Discursos o Disertaciones'. Explora un vasto tesoro de sabiduría en estas charlas registradas, donde la filosofía se convierte en un faro para navegar las aguas de la vida. Desde la ética hasta la lógica y la virtud, este libro te lleva a un viaje de autodescubrimiento y empoderamiento a través de las palabras de un maestro que aún nos guía en la búsqueda de la sabiduría y la serenidad");
        this.lecturaPasoParametrosService.infoLibro.set("cantidad", "53");
        this.lecturaPasoParametrosService.infoLibro.set("nombreSeparador", "Libro:");
        break;
      case 9:
        this.lecturaPasoParametrosService.infoLibro.clear();
        this.lecturaPasoParametrosService.infoLibro.set("nombreLibro", "Cómo ser un estoico");
        this.lecturaPasoParametrosService.infoLibro.set("autorLibro", "Massimo Pigliucci");
        this.lecturaPasoParametrosService.infoLibro.set("descLibro", "Descripción del libro");
        this.lecturaPasoParametrosService.infoLibro.set("cantidad", "53");
        break;
      case 10:
        this.lecturaPasoParametrosService.infoLibro.clear();
        this.lecturaPasoParametrosService.infoLibro.set("nombreLibro", "Mi cuaderno estoico");
        this.lecturaPasoParametrosService.infoLibro.set("autorLibro", "Massimo Pigliucci y Gregory López");
        this.lecturaPasoParametrosService.infoLibro.set("descLibro", "Descripción del libro");
        break;
      case 11:
        this.lecturaPasoParametrosService.infoLibro.clear();
        this.lecturaPasoParametrosService.infoLibro.set("nombreLibro", "Diario para estoicos");
        this.lecturaPasoParametrosService.infoLibro.set("autorLibro", "Ryan Holiday");
        this.lecturaPasoParametrosService.infoLibro.set("descLibro", "Descripción del libro");
        break;
      case 12:
        this.lecturaPasoParametrosService.infoLibro.clear();
        this.lecturaPasoParametrosService.infoLibro.set("nombreLibro", "Vida de los estoicos");
        this.lecturaPasoParametrosService.infoLibro.set("autorLibro", "Ryan Holiday y Stephen Hasselman");
        this.lecturaPasoParametrosService.infoLibro.set("descLibro", "Descripción del libro");
        break;
      case 13:
        this.lecturaPasoParametrosService.infoLibro.clear();
        this.lecturaPasoParametrosService.infoLibro.set("nombreLibro", "La llamada del coraje");
        this.lecturaPasoParametrosService.infoLibro.set("autorLibro", "Ryan Holiday");
        this.lecturaPasoParametrosService.infoLibro.set("descLibro", "Descripción del libro");
        break;
      case 14:
        this.lecturaPasoParametrosService.infoLibro.clear();
        this.lecturaPasoParametrosService.infoLibro.set("nombreLibro", "El obstáculo es el camino");
        this.lecturaPasoParametrosService.infoLibro.set("autorLibro", "Ryan Holiday");
        this.lecturaPasoParametrosService.infoLibro.set("descLibro", "Descripción del libro");
        break;
    }
    this.router.navigate(['/tab-inicial/contenedor-lectura']);
  }

  public volver(): void{
    this.router.navigate(['/tab-inicial/estudiar']);
  }

}
