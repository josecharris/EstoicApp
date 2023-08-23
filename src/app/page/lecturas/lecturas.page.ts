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
        this.lecturaPasoParametrosService.infoLibro.set("cita", "http://bibliotecadigital.ilce.edu.mx/Colecciones/ObrasClasicas/_docs/Meditaciones_MarcoAurelio.pdf");

        break;
      case 2:
        this.lecturaPasoParametrosService.infoLibro.clear();
        this.lecturaPasoParametrosService.infoLibro.set("nombreLibro", "Cartas a Lucilio");
        this.lecturaPasoParametrosService.infoLibro.set("autorLibro", "Séneca");
        this.lecturaPasoParametrosService.infoLibro.set("descLibro", "Un compendio íntimo y cautivador de sabiduría atemporal. Las epístolas de Séneca te guían a través de la vida, la virtud y el arte de vivir bien. Una conversación con un antiguo sabio que resuena poderosamente en el presente.");
        this.lecturaPasoParametrosService.infoLibro.set("descAdicional", "Este libro está compuesto por el siguiente número de cartas:");
        this.lecturaPasoParametrosService.infoLibro.set("nombreSeparador", "Cartas:");
        this.lecturaPasoParametrosService.infoLibro.set("nombreArchivo", "cartas_a_lucilio.pdf");
        this.lecturaPasoParametrosService.infoLibro.set("cita", "http://bibliotecadigital.ilce.edu.mx/Colecciones/ObrasClasicas/_docs/Meditaciones_MarcoAurelio.pdf");

        break;
      case 3:
        this.lecturaPasoParametrosService.infoLibro.clear();
        this.lecturaPasoParametrosService.infoLibro.set("nombreLibro", "Sobre la brevedad de la vida");
        this.lecturaPasoParametrosService.infoLibro.set("autorLibro", "Séneca");
        this.lecturaPasoParametrosService.infoLibro.set("descLibro", "Un destello de claridad en un mundo fugaz. Séneca, el estoico, destila la esencia del tiempo en estas páginas conmovedoras. Un llamado a vivir plenamente en un instante, a abrazar la fugacidad y encontrar la eternidad en cada aliento.");
        this.lecturaPasoParametrosService.infoLibro.set("nombreSeparador", "Capítulos:");
        this.lecturaPasoParametrosService.infoLibro.set("nombreArchivo", "de_la_brevedad_de_la_vida.pdf");
        this.lecturaPasoParametrosService.infoLibro.set("cita", "https://www.bibliotecavirtualdeandalucia.es/catalogo/es/catalogo_imagenes/grupo.do?path=1014408");
        break;
      case 4:
        this.lecturaPasoParametrosService.infoLibro.clear();
        this.lecturaPasoParametrosService.infoLibro.set("nombreLibro", "Sobre la ira");
        this.lecturaPasoParametrosService.infoLibro.set("autorLibro", "Séneca");
        this.lecturaPasoParametrosService.infoLibro.set("descLibro", "Un análisis magistral de una emoción poderosa. Séneca, el sabio estoico, desentraña los laberintos de la ira y ofrece el antídoto para la serenidad. Un viaje hacia el autocontrol en medio de las tormentas emocionales, destilando la calma del conocimiento antiguo.");
        this.lecturaPasoParametrosService.infoLibro.set("nombreSeparador", "Libros:");
        this.lecturaPasoParametrosService.infoLibro.set("cantidad", "3");
        this.lecturaPasoParametrosService.infoLibro.set("nombreArchivo", "de_la_ira.pdf");
        this.lecturaPasoParametrosService.infoLibro.set("cita", "https://www.elejandria.com/libro/de-la-ira/seneca/1265");
        break;
      case 5:
        this.lecturaPasoParametrosService.infoLibro.clear();
        this.lecturaPasoParametrosService.infoLibro.set("nombreLibro", "Sobre la constancia del sabio");
        this.lecturaPasoParametrosService.infoLibro.set("autorLibro", "Séneca");
        this.lecturaPasoParametrosService.infoLibro.set("descLibro", "Adéntrate en el mundo interior de la fortaleza inquebrantable con 'De la constancia del sabio'. Séneca, el maestro estoico, desentraña los secretos de la serenidad en medio de tormentas emocionales. En un diálogo íntimo con la virtud, descubre cómo el sabio navega las aguas tumultuosas de la vida con una constancia inamovible. Un camino luminoso hacia la tranquilidad en medio de las turbulencias del mundo.");
        this.lecturaPasoParametrosService.infoLibro.set("cantidad", "19");
        this.lecturaPasoParametrosService.infoLibro.set("nombreSeparador", "Capítulos:");
        this.lecturaPasoParametrosService.infoLibro.set("nombreArchivo", "de_la_constancia_del_sabio.pdf");
        this.lecturaPasoParametrosService.infoLibro.set("cita", "https://www.elejandria.com/libro/de-la-constancia-del-sabio/seneca/1263");
        break;
      case 6:
        this.lecturaPasoParametrosService.infoLibro.clear();
        this.lecturaPasoParametrosService.infoLibro.set("nombreLibro", "De la tranquilidad del ánimo");
        this.lecturaPasoParametrosService.infoLibro.set("autorLibro", "Séneca");
        this.lecturaPasoParametrosService.infoLibro.set("descLibro", "En un mundo agitado y tumultuoso, Séneca te invita a un viaje interior hacia la paz inquebrantable. En 'De la tranquilidad del ánimo', el sabio romano te guía con maestría a través de los laberintos de la vida, revelando el poder de la filosofía para liberarte de las cadenas de la ansiedad y conducirte a la serenidad que anhelas.");
        this.lecturaPasoParametrosService.infoLibro.set("nombreSeparador", "Capítulos:");
        this.lecturaPasoParametrosService.infoLibro.set("nombreArchivo", "de_la_tranquilidad_del_animo.pdf");
        this.lecturaPasoParametrosService.infoLibro.set("cita", "https://ministeriodeeducacion.gob.do/docs/biblioteca-virtual/B6tO-seneca-lucio-anneo-de-la-tranquilidad-de-animopdf.pdf");
        break;
      case 7:
        this.lecturaPasoParametrosService.infoLibro.clear();
        this.lecturaPasoParametrosService.infoLibro.set("nombreLibro", "Enquiridion");
        this.lecturaPasoParametrosService.infoLibro.set("autorLibro", "Epicteto");
        this.lecturaPasoParametrosService.infoLibro.set("descLibro", "Sumérgete en la esencia de la sabiduría estoica con 'Enchiridion', la obra atemporal de Epicteto. En sus breves pero poderosas palabras, encontrarás un manual para forjar una mentalidad resiliente en medio de las tormentas de la vida. Prepárate para abrazar la autodisciplina, el desapego y la serenidad en tu búsqueda de una vida plena y virtuosa");
        this.lecturaPasoParametrosService.infoLibro.set("nombreSeparador", "Enseñanzas:");
        this.lecturaPasoParametrosService.infoLibro.set("nombreArchivo", "manual.pdf");
        this.lecturaPasoParametrosService.infoLibro.set("cita", "https://web.seducoahuila.gob.mx/biblioweb/upload/Epicteto%20-%20Manual%20De%20Epicteto.pdf");
        break;
      case 8:
        this.lecturaPasoParametrosService.infoLibro.clear();
        this.lecturaPasoParametrosService.infoLibro.set("nombreLibro", "Enquiridion ilustrado");
        this.lecturaPasoParametrosService.infoLibro.set("autorLibro", "Epicteto");
        this.lecturaPasoParametrosService.infoLibro.set("descLibro", "Las enseñanzas del maestro Epicteto dada de forma ilustrada haciendo su enseñanza más agradable y amena.");
        this.lecturaPasoParametrosService.infoLibro.set("nombreSeparador", "Libro:");
        this.lecturaPasoParametrosService.infoLibro.set("nombreArchivo", "manual_ilustrado.pdf");
        break;
      case 9:
        this.lecturaPasoParametrosService.infoLibro.clear();
        this.lecturaPasoParametrosService.infoLibro.set("nombreLibro", "Los Discursos o Disertaciones");
        this.lecturaPasoParametrosService.infoLibro.set("autorLibro", "Epicteto");
        this.lecturaPasoParametrosService.infoLibro.set("descLibro", "Sumérgete en las conversaciones íntimas con el maestro estoico Epicteto a través de 'Los Discursos o Disertaciones'. Explora un vasto tesoro de sabiduría en estas charlas registradas, donde la filosofía se convierte en un faro para navegar las aguas de la vida. Desde la ética hasta la lógica y la virtud, este libro te lleva a un viaje de autodescubrimiento y empoderamiento a través de las palabras de un maestro que aún nos guía en la búsqueda de la sabiduría y la serenidad");
        this.lecturaPasoParametrosService.infoLibro.set("nombreArchivo", "disertaciones.pdf");
        this.lecturaPasoParametrosService.infoLibro.set("cita", "https://dokumen.tips/documents/epicteto-disertaciones-por-arriano-editorial-gredospdf.html");
        break;
      case 10:
        this.lecturaPasoParametrosService.infoLibro.clear();
        this.lecturaPasoParametrosService.infoLibro.set("nombreLibro", "Cómo ser un estoico");
        this.lecturaPasoParametrosService.infoLibro.set("autorLibro", "Massimo Pigliucci");
        this.lecturaPasoParametrosService.infoLibro.set("descLibro", "El libro es una guía moderna que explora las antiguas enseñanzas estoicas a través de los ojos del filósofo Massimo Pigliucci. Descubre cómo aplicar la sabiduría atemporal de los estoicos para navegar los desafíos de la vida moderna y encontrar la serenidad en medio del caos. Este libro te llevará en un viaje transformador hacia la autenticidad y la resiliencia interior.");
        this.lecturaPasoParametrosService.infoLibro.set("nombreArchivo", "como_ser_estoico.pdf");
        break;
        break;
      case 11:
        this.lecturaPasoParametrosService.infoLibro.clear();
        this.lecturaPasoParametrosService.infoLibro.set("nombreLibro", "Mi cuaderno estoico");
        this.lecturaPasoParametrosService.infoLibro.set("autorLibro", "Massimo Pigliucci y Gregory López");
        this.lecturaPasoParametrosService.infoLibro.set("descLibro", "Descripción del libro");
        break;
      case 12:
        this.lecturaPasoParametrosService.infoLibro.clear();
        this.lecturaPasoParametrosService.infoLibro.set("nombreLibro", "Diario para estoicos");
        this.lecturaPasoParametrosService.infoLibro.set("autorLibro", "Ryan Holiday");
        this.lecturaPasoParametrosService.infoLibro.set("descLibro", "Descripción del libro");
        break;
      case 13:
        this.lecturaPasoParametrosService.infoLibro.clear();
        this.lecturaPasoParametrosService.infoLibro.set("nombreLibro", "Vida de los estoicos");
        this.lecturaPasoParametrosService.infoLibro.set("autorLibro", "Ryan Holiday y Stephen Hasselman");
        this.lecturaPasoParametrosService.infoLibro.set("descLibro", "Descripción del libro");
        break;
      case 14:
        this.lecturaPasoParametrosService.infoLibro.clear();
        this.lecturaPasoParametrosService.infoLibro.set("nombreLibro", "La llamada del coraje");
        this.lecturaPasoParametrosService.infoLibro.set("autorLibro", "Ryan Holiday");
        this.lecturaPasoParametrosService.infoLibro.set("descLibro", "Descripción del libro");
        break;
      case 15:
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
