import { Component, OnInit } from '@angular/core';
import { Pregunta } from 'src/app/dto/pregunta.dto';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.page.html',
  styleUrls: ['./preguntas.page.scss'],
})
export class PreguntasPage implements OnInit {

  public preguntas: Pregunta[] = [];

  constructor() { }

  ngOnInit() {
    this.preguntas.push(new Pregunta("Descripcion", "Opcion 1", "Opcion 2", "Opcion 3", 2));
  }

  public validarRespuesta(opcionCorrecta: number, opcionSeleccionada: number){
    
  }

}
