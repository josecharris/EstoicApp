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
  
  constructor() { }

  ngOnInit() {
  }

  public mostrarMaterial(numeroLibro: number): void{
    if (navigator.onLine) {
      if(numeroLibro == 1){
        this.mostrarReproductor = true;
        this.mostrarReglas = true;
        this.mostrarMandamientos = false;
        this.titulo = "Reglas del estoicismo";
      }
      if(numeroLibro == 2){
        this.mostrarReproductor = true;
        this.mostrarReglas = false;
        this.mostrarMandamientos = true;
        this.titulo = "Mandamientos del estoicismo";
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
