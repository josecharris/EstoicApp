import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-frases',
  templateUrl: './frases.page.html',
  styleUrls: ['./frases.page.scss'],
})
export class FrasesPage implements OnInit {

  constructor() { }

  ngOnInit() {
    const mySwiper = new Swiper('.swiper-container', {
      direction: 'vertical',
      // Otras opciones de configuración aquí
    });
  }

}
