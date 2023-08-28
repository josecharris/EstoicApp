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

  constructor() { }

  ngOnInit() {
    /* Cargue */
    this.preguntas.push(new Pregunta("Descripcion", "Opcion 1", "Opcion 2", "Opcion 3", 2));
    this.preguntas.push(new Pregunta("Descripcion 2", "Opcion 1", "Opcion 2", "Opcion 3", 2));
    this.preguntas.push(new Pregunta("Descripcion 3", "Opcion 1", "Opcion 2", "Opcion 3", 2));
    /* Seleccionar pregunta */
    const index = Math.floor(Math.random() * this.preguntas.length);
    this.pregunta = this.preguntas[index];
  }

  public validarRespuesta(opcionSeleccionada: number){
    
  }

  public siguientePregunta(){
    const index = Math.floor(Math.random() * this.preguntas.length);
    this.pregunta = this.preguntas[index];
  }

}
