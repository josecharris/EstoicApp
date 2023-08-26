import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';
import jsonFile from  './../../../assets/files/json/frases.json';
import { Frase } from 'src/app/dto/frase.dto';


@Component({
  selector: 'app-frases',
  templateUrl: './frases.page.html',
  styleUrls: ['./frases.page.scss'],
})
export class FrasesPage implements OnInit {

  public lstFrases = jsonFile.frases;
  public frases: Frase[] = [];

  constructor() {
    this.cargarJSON();
  }

  ngOnInit() {
    const mySwiper = new Swiper('.swiper-container', {
      direction: 'vertical',
      // Otras opciones de configuración aquí
    });
  }

  cargarJSON() {
    this.frases = jsonFile.frases.map((frase: any) => {
      const descFrase = frase.frase;
      const autor = frase.autor;
      const explicacion = frase.explicacion;
      const image = "";
      return new Frase(descFrase, autor, explicacion );
    });
  }

}
