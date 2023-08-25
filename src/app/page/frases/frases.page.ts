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
  ];
  constructor() { }

  ngOnInit() {
    const mySwiper = new Swiper('.swiper-container', {
      direction: 'vertical',
      // Otras opciones de configuración aquí
    });
  }

}
