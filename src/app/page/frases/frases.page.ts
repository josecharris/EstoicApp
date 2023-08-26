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
  public asset: string = "./../../../assets/images/";
  public imagenes: string[] = [];

  constructor() {
    this.cargarImagenes();
    this.cargarJSON();
  }

  ngOnInit() {
    const mySwiper = new Swiper('.swiper-container', {
      direction: 'vertical',
    });
  }

  cargarJSON() {
    this.frases = jsonFile.frases.map((frase: any) => {
      const descFrase = frase.frase;
      const autor = frase.autor;
      const explicacion = frase.explicacion;
      const randomNumber = Math.floor(Math.random() * 11);
      const image = this.asset + this.imagenes[randomNumber];
      return new Frase( descFrase, autor, explicacion,image );
    });
  }

  cargarImagenes(){
    this.imagenes.push("acompañado.avif");
    this.imagenes.push("color.avif");
    this.imagenes.push("escultura.jpg");
    this.imagenes.push("leyendo.avif");
    this.imagenes.push("luna.avif");
    this.imagenes.push("marco.jpg");
    this.imagenes.push("marco_escultura.jpg");
    this.imagenes.push("memento_mori.png");
    this.imagenes.push("mirando.jpg");
    this.imagenes.push("pensando.jpg");
    this.imagenes.push("seneca.avif");
  }

}
