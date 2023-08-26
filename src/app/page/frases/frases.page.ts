import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-frases',
  templateUrl: './frases.page.html',
  styleUrls: ['./frases.page.scss'],
})
export class FrasesPage implements OnInit {

  public frases = [
    {
      frase: "No busques que los acontecimientos sucedan como deseas; desea que los acontecimientos sucedan como suceden, y serás feliz.",
      autor: "EPICTETO",
      explicacion: "Aceptar la realidad tal como es, sin resistencia, nos permite encontrar la paz interior y ser más felices con lo que tenemos.",
      image: "./../../../assets/images/pensando.jpg"
    },
    {
      frase: "No son las cosas en sí mismas las que nos perturban, sino nuestra interpretación de ellas.",
      autor: "EPICTETO",
      explicacion: "Nuestras emociones están influenciadas por cómo interpretamos las situaciones. Elegir interpretaciones sabias y serenas nos ayuda a mantener la calma.",
      image: "./../../../assets/images/color.avif"
    },
    {
      frase: "El hombre sabio es siempre amigo de la verdad.",
      autor: "SENECA",
      explicacion: "La honestidad y la búsqueda de la verdad son fundamentales para cultivar la sabiduría en nuestras vidas.",
      image: "./../../../assets/images/seneca.avif"
    }, 
    {
      frase: "No te afanes por las cosas que están fuera de tu poder.",
      autor: "EPICTETO",
      explicacion: "Concentrarnos en lo que podemos controlar nos permite evitar la frustración y enfocarnos en lo que realmente importa.",
      image: "./../../../assets/images/leyendo.avif"
    },
    {
      frase: "La felicidad yace en la virtud, y no en la riqueza o el placer.",
      autor: "MARCO AURELIO",
      explicacion: "Buscar una vida virtuosa es el camino hacia la auténtica felicidad, independientemente de las posesiones materiales.",
      image: "./../../../assets/images/escultura.jpg"
    },
    {
      frase: "No te conviertas en esclavo de ninguna posesión, ya que, a través de un aumento en tu fortuna, puedes adquirir un amo.",
      autor: "SENECA",
      explicacion: "Apegarnos excesivamente a las posesiones materiales nos puede esclavizar, y la verdadera libertad radica en no depender de ellas.",
      image: "./../../../assets/images/seneca.avif"
    },
    {
      frase: "La muerte no nos concierne, porque mientras somos, la muerte no es, y cuando la muerte es, nosotros no somos.",
      autor: "EPICURO",
      explicacion: "Aceptar la naturaleza transitoria de la vida nos permite vivir plenamente y apreciar cada momento.",
      image: "./../../../assets/images/memento_mori.png"
    }
  ];
  constructor() { }

  ngOnInit() {
    const mySwiper = new Swiper('.swiper-container', {
      direction: 'vertical',
      // Otras opciones de configuración aquí
    });
  }

}
