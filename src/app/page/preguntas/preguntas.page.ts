import { Component, OnInit } from '@angular/core';
import { Pregunta } from 'src/app/dto/pregunta.dto';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.page.html',
  styleUrls: ['./preguntas.page.scss'],
})
export class PreguntasPage implements OnInit {

  public pregunta: Pregunta = new Pregunta("", "", "", "", 2);
  public preguntas: Pregunta[] = [];
  private indice: number = -1;

  constructor() { }

  ngOnInit() {
    /* Cargue */
    this.preguntas.push(new Pregunta("Descripcion", "Opcion 1", "Opcion 2", "Opcion 3", 2));
    this.preguntas.push(new Pregunta("Descripcion 2", "Opcion 1", "Opcion 2", "Opcion 3", 2));
    this.preguntas.push(new Pregunta("Descripcion 3", "Opcion 1", "Opcion 2", "Opcion 3", 2));
    this.preguntas.push(new Pregunta("Descripcion 4", "Opcion 1", "Opcion 2", "Opcion 3", 2));
    this.preguntas.push(new Pregunta("Descripcion 5", "Opcion 1", "Opcion 2", "Opcion 3", 2));

    this.preguntas = this.ordenarListaAleatorio(this.preguntas);
    /* Seleccionar pregunta */
    const index = this.getRandomInt(0, this.preguntas.length);
    this.indice = index;
    this.pregunta = this.preguntas[this.indice];
  }

  private getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  public validarRespuesta(opcionSeleccionada: number){
    
  }

  /** Algoritmo de Fisher-Yates */
  private ordenarListaAleatorio(array: Pregunta[]): Pregunta[] {
    const listaModificada = array.slice(); // Copia del array original
    for (let i = listaModificada.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        // Intercambiar elementos
        [listaModificada[i], listaModificada[j]] = [listaModificada[j], listaModificada[i]];
    }
    return listaModificada;
  }

  public siguientePregunta(){
    let index: number = this.indice;
    while(this.indice == index){
      index = this.getRandomInt(0, this.preguntas.length);
    }
    this.pregunta = this.preguntas[index];
  }

}
