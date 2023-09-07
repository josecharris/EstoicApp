import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reflexion',
  templateUrl: './reflexion.page.html',
  styleUrls: ['./reflexion.page.scss'],
})
export class ReflexionPage implements OnInit {

  public titulo: string = "";
  public mostrarMsjCon: boolean = false;
  public mostrarBotones: boolean = true;
  public mostrarReproductor: boolean = false;
  public mostrarReglas: boolean = false;
  public mostrarMandamientos: boolean = false;
  public frasesEmperador: boolean = false;
  public pilares: boolean = false;
  public consejos: boolean = false;
  public practica: boolean = false;
  public vicios: boolean = false;
  public ejercicios: boolean = false;
  public calma: boolean = false;
  public actualidad: boolean = false;
  
  constructor() { }

  ngOnInit() {
  }

  public mostrarMaterial(numeroLibro: number): void{
    if (navigator.onLine) {
      if(numeroLibro == 1){
        this.mostrarBotones = false;
        this.mostrarReproductor = true;
        this.mostrarReglas = true;
        this.mostrarMandamientos = false;
        this.frasesEmperador = false;
        this.pilares = false;
        this.consejos = false;
        this.practica = false;
        this.vicios = false;
        this.calma = false;
        this.ejercicios = false;
        this.actualidad = false;
        this.titulo = "Reglas del estoicismo";
      }
      if(numeroLibro == 2){
        this.mostrarBotones = false;
        this.mostrarReproductor = true;
        this.mostrarReglas = false;
        this.mostrarMandamientos = true;
        this.frasesEmperador = false;
        this.pilares = false;
        this.consejos = false;
        this.practica = false;
        this.vicios = false;
        this.calma = false;
        this.ejercicios = false;
        this.actualidad = false;
        this.titulo = "Mandamientos del estoicismo";
      }
      if(numeroLibro == 3){
        this.mostrarBotones = false;
        this.mostrarReproductor = true;
        this.mostrarReglas = false;
        this.mostrarMandamientos = false;
        this.frasesEmperador = true;
        this.pilares = false;
        this.consejos = false;
        this.practica = false;
        this.vicios = false;
        this.calma = false;
        this.ejercicios = false;
        this.actualidad = false;
        this.titulo = "Frases del emperador";
      }
      if(numeroLibro == 4){
        this.mostrarBotones = false;
        this.mostrarReproductor = true;
        this.mostrarReglas = false;
        this.mostrarMandamientos = false;
        this.frasesEmperador = false;
        this.pilares = true;
        this.consejos = false;
        this.practica = false;
        this.vicios = false;
        this.calma = false;
        this.ejercicios = false;
        this.actualidad = false;
        this.titulo = "Pilares importantes";
      }
      if(numeroLibro == 5){
        this.mostrarBotones = false;
        this.mostrarReproductor = true;
        this.mostrarReglas = false;
        this.mostrarMandamientos = false;
        this.frasesEmperador = false;
        this.pilares = false;
        this.consejos = true;
        this.practica = false;
        this.vicios = false;
        this.calma = false;
        this.ejercicios = false;
        this.actualidad = false;
        this.titulo = "Consejos para la vida";
      }
      if(numeroLibro == 6){
        this.mostrarBotones = false;
        this.mostrarReproductor = true;
        this.mostrarReglas = false;
        this.mostrarMandamientos = false;
        this.frasesEmperador = false;
        this.pilares = false;
        this.consejos = false;
        this.practica = true;
        this.vicios = false;
        this.calma = false;
        this.ejercicios = false;
        this.actualidad = false;
        this.titulo = "Estoicismo moderno";
      }
      if(numeroLibro == 7){
        this.mostrarBotones = false;
        this.mostrarReproductor = true;
        this.mostrarReglas = false;
        this.mostrarMandamientos = false;
        this.frasesEmperador = false;
        this.pilares = false;
        this.consejos = false;
        this.practica = false;
        this.vicios = true;
        this.calma = false;
        this.ejercicios = false;
        this.actualidad = false;
        this.titulo = "Reflexión de los vicios";
      }
      if(numeroLibro == 8){
        this.mostrarBotones = false;
        this.mostrarReproductor = true;
        this.mostrarReglas = false;
        this.mostrarMandamientos = false;
        this.frasesEmperador = false;
        this.pilares = false;
        this.consejos = false;
        this.practica = false;
        this.vicios = false;
        this.calma = true;
        this.ejercicios = false;
        this.actualidad = false;
        this.titulo = "Maneras de calmarte";
      }
      if(numeroLibro == 9){
        this.mostrarBotones = false;
        this.mostrarReproductor = true;
        this.mostrarReglas = false;
        this.mostrarMandamientos = false;
        this.frasesEmperador = false;
        this.pilares = false;
        this.consejos = false;
        this.practica = false;
        this.vicios = false;
        this.calma = false;
        this.ejercicios = true;
        this.actualidad = false;
        this.titulo = "11 Ejercicios estoicos";
      }
      if(numeroLibro == 10){
        this.mostrarBotones = false;
        this.mostrarReproductor = true;
        this.mostrarReglas = false;
        this.mostrarMandamientos = false;
        this.frasesEmperador = false;
        this.pilares = false;
        this.consejos = false;
        this.practica = false;
        this.vicios = false;
        this.calma = false;
        this.ejercicios = false;
        this.actualidad = true;
        this.titulo = "Práctica diaria";
      }
    }else{
      this.mostrarMsjCon = true;
      this.mostrarReproductor = false;
      this.mostrarBotones = false;
    }
  }

  public volverBotones(): void{
    this.mostrarBotones = true;
    this.mostrarReproductor = false;
  }

}
