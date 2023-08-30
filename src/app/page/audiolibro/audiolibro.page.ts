import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-audiolibro',
  templateUrl: './audiolibro.page.html',
  styleUrls: ['./audiolibro.page.scss'],
})
export class AudiolibroPage implements OnInit {
  public titulo: string = "";
  public mostrarMsjCon: boolean = false;
  public mostrarReproductor: boolean = false;
  public mostrarMeditaciones: boolean = false;
  public mostrarManual: boolean = false;
  public mostrarLecciones: boolean = false;
  public mostrarEpistolaLucilio1: boolean = false;
  public mostrarBotones: boolean = true;
  constructor() { }

  ngOnInit() {
  }

  public mostrarAudioLibro(numeroLibro: number): void{
    if (navigator.onLine) {
      this.mostrarMsjCon = false;
      if(numeroLibro === 1){
        this.mostrarReproductor = true;
        this.mostrarMeditaciones = true;
        this.mostrarManual = false;
        this.mostrarBotones = false;
        this.mostrarLecciones = false;
        this.mostrarEpistolaLucilio1 = false;
        this.titulo = "Meditaciones";
      }
      if(numeroLibro === 2){
        this.mostrarReproductor = true;
        this.mostrarMeditaciones = false;
        this.mostrarManual = true;
        this.mostrarBotones = false;
        this.mostrarLecciones = false;
        this.mostrarEpistolaLucilio1 = false;
        this.titulo = "Manual de Epicteto";
      }
      if(numeroLibro === 3){
        this.mostrarReproductor = true;
        this.mostrarMeditaciones = false;
        this.mostrarManual = false;
        this.mostrarBotones = false;
        this.mostrarLecciones = true;
        this.mostrarEpistolaLucilio1 = false;
        this.titulo = "Lecciones de estoicismo";
      }
      if(numeroLibro === 4){
        this.mostrarReproductor = true;
        this.mostrarMeditaciones = false;
        this.mostrarManual = false;
        this.mostrarBotones = false;
        this.mostrarLecciones = false;
        this.mostrarEpistolaLucilio1 = true;
        this.titulo = "Epistolas morales a Lucilio";
      }
      
    } else {
      this.mostrarMsjCon = true;
      this.mostrarReproductor = false;
      this.mostrarBotones = false;
    }
  }

  public volverBotones(): void{
    this.mostrarBotones = true;
    this.mostrarReproductor = false;
    this.mostrarMeditaciones = false;
    this.mostrarManual = false;
  }

}
