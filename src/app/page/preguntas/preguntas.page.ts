import { Component, OnInit } from '@angular/core';
import { Pregunta } from 'src/app/dto/pregunta.dto';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import jsonFile from  './../../../assets/files/json/preguntas.json';


@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.page.html',
  styleUrls: ['./preguntas.page.scss'],
})
export class PreguntasPage implements OnInit {

  public pregunta: Pregunta = new Pregunta("", "", "", "", "", 2);
  public preguntas: Pregunta[] = [];
  private indice: number = -1;
  public mostrarResultado: boolean = false;
  public respuestaCorrecta: boolean = false;

  constructor( private router: Router ) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.preguntas = [];
        this.cargarJSON();
        this.preguntas = this.ordenarListaAleatorio( this.preguntas );
        this.preguntas = this.ordenarListaAleatorio(this.preguntas);
        /* Seleccionar pregunta */
        const index = this.getRandomInt(0, this.preguntas.length);
        this.indice = index;
        this.pregunta = this.preguntas[this.indice];
      });
  }

  ngOnInit() { }

  private getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  public validarRespuesta(opcionSeleccionada: number){
    if(this.mostrarResultado === false){
      if(this.pregunta.respuestaCorrecta === opcionSeleccionada){
        this.mostrarResultado = true;
        this.respuestaCorrecta = true;
      }else{
        this.mostrarResultado = true;
        this.respuestaCorrecta = false;
      }
    } 
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
    this.mostrarResultado = false;
    this.respuestaCorrecta = false;
  }

  private cargarJSON() {
    this.preguntas = jsonFile.preguntas.map((pregunta: any) => {
      const descripcion = pregunta.descripcion;
      const primeraOpcion = pregunta.primeraOpcion;
      const segundaOpcion = pregunta.segundaOpcion;
      const terceraOpcion = pregunta.terceraOpcion;
      const explicacion = pregunta.explicacion;
      const respuestaCorrecta = pregunta.respuestaCorrecta;
      return new Pregunta( descripcion, primeraOpcion, segundaOpcion, terceraOpcion, explicacion, respuestaCorrecta );
    });
  }

}
