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
        this.titulo = "Reglas del estoicismo";
      }
      if(numeroLibro == 2){
        this.mostrarBotones = false;
        this.mostrarReproductor = true;
        this.mostrarReglas = false;
        this.mostrarMandamientos = true;
        this.frasesEmperador = false;
        this.pilares = false;
        this.titulo = "Mandamientos del estoicismo";
      }
      if(numeroLibro == 3){
        this.mostrarBotones = false;
        this.mostrarReproductor = true;
        this.mostrarReglas = false;
        this.mostrarMandamientos = false;
        this.frasesEmperador = true;
        this.pilares = false;
        this.titulo = "Frases del emperador";
      }
      if(numeroLibro == 4){
        this.mostrarBotones = false;
        this.mostrarReproductor = true;
        this.mostrarReglas = false;
        this.mostrarMandamientos = false;
        this.frasesEmperador = false;
        this.pilares = true;
        this.titulo = "Pilares importantes";
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
