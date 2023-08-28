import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';
import jsonFile from  './../../../assets/files/json/frases.json';
import { Frase } from 'src/app/dto/frase.dto';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';


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
  public frase: Frase = new Frase("", "", "", "");
  private indice: number = -1;

  constructor( private router: Router ) {
    this.cargarImagenes();
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.frases = [];
        this.cargarJSON();
        this.frases = this.ordenarListaAleatorio(this.frases);
        const index = this.getRandomInt(0, this.frases.length + 1);
        this.indice = index;
        this.frase = this.frases[this.indice];
      });
  }

  ngOnInit() {
    const mySwiper = new Swiper('.swiper-container', {
      direction: 'vertical',
    });
  }

  private getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  private cargarJSON() {
    this.frases = jsonFile.frases.map((frase: any) => {
      const descFrase = frase.frase;
      const autor = frase.autor;
      const explicacion = frase.explicacion;
      const randomNumber = Math.floor(Math.random() * 11);
      const image = this.asset + this.imagenes[randomNumber];
      return new Frase( descFrase, autor, explicacion,image );
    });
  }

  private cargarImagenes(): void{
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

  /** Algoritmo de Fisher-Yates */
  private ordenarListaAleatorio(array: Frase[]): Frase[] {
    const listaModificada = array.slice(); // Copia del array original
    for (let i = listaModificada.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        // Intercambiar elementos
        [listaModificada[i], listaModificada[j]] = [listaModificada[j], listaModificada[i]];
    }
    return listaModificada;
  }

  public siguienteFrase(){
    let index: number = this.indice;
    while(this.indice == index){
      index = Math.floor(Math.random() * this.frases.length);
    }
    this.frase = this.frases[index];
    
  }

}
