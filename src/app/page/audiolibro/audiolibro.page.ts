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
  public mostrarEpistolaLucilio2: boolean = false;
  public mostrarEpistolaLucilio3: boolean = false;
  public mostrarEpistolaLucilio4: boolean = false;
  public mostrarEpistolaLucilio5: boolean = false;
  public mostrarEpistolaLucilio6: boolean = false;
  public mostrarSobreBrevedad: boolean = false;
  public mostrarDisertaciones: boolean = false;
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
        this.mostrarEpistolaLucilio2 = false;
        this.mostrarEpistolaLucilio3 = false;
        this.mostrarEpistolaLucilio4 = false;
        this.mostrarEpistolaLucilio5 = false;
        this.mostrarEpistolaLucilio6 = false;
        this.mostrarSobreBrevedad = false;
        this.mostrarDisertaciones = false;
        this.titulo = "Meditaciones";
      }
      if(numeroLibro === 2){
        this.mostrarReproductor = true;
        this.mostrarMeditaciones = false;
        this.mostrarManual = true;
        this.mostrarBotones = false;
        this.mostrarLecciones = false;
        this.mostrarEpistolaLucilio1 = false;
        this.mostrarEpistolaLucilio2 = false;
        this.mostrarEpistolaLucilio3 = false;
        this.mostrarEpistolaLucilio4 = false;
        this.mostrarEpistolaLucilio5 = false;
        this.mostrarEpistolaLucilio6 = false;
        this.mostrarSobreBrevedad = false;
        this.mostrarDisertaciones = false;
        this.titulo = "Manual de Epicteto";
      }
      if(numeroLibro === 3){
        this.mostrarReproductor = true;
        this.mostrarMeditaciones = false;
        this.mostrarManual = false;
        this.mostrarBotones = false;
        this.mostrarLecciones = true;
        this.mostrarEpistolaLucilio1 = false;
        this.mostrarEpistolaLucilio2 = false;
        this.mostrarEpistolaLucilio3 = false;
        this.mostrarEpistolaLucilio4 = false;
        this.mostrarEpistolaLucilio5 = false;
        this.mostrarEpistolaLucilio6 = false;
        this.mostrarSobreBrevedad = false;
        this.mostrarDisertaciones = false;
        this.titulo = "Lecciones de estoicismo";
      }
      if(numeroLibro === 4){
        this.mostrarReproductor = true;
        this.mostrarMeditaciones = false;
        this.mostrarManual = false;
        this.mostrarBotones = false;
        this.mostrarLecciones = false;
        this.mostrarEpistolaLucilio1 = true;
        this.mostrarEpistolaLucilio2 = false;
        this.mostrarEpistolaLucilio3 = false;
        this.mostrarEpistolaLucilio4 = false;
        this.mostrarEpistolaLucilio5 = false;
        this.mostrarEpistolaLucilio6 = false;
        this.mostrarSobreBrevedad = false;
        this.mostrarDisertaciones = false;
        this.titulo = "Epistolas morales a Lucilio";
      }
      if(numeroLibro === 5){
        this.mostrarReproductor = true;
        this.mostrarMeditaciones = false;
        this.mostrarManual = false;
        this.mostrarBotones = false;
        this.mostrarLecciones = false;
        this.mostrarEpistolaLucilio1 = false;
        this.mostrarEpistolaLucilio2 = true;
        this.mostrarEpistolaLucilio3 = false;
        this.mostrarEpistolaLucilio4 = false;
        this.mostrarEpistolaLucilio5 = false;
        this.mostrarEpistolaLucilio6 = false;
        this.mostrarSobreBrevedad = false;
        this.mostrarDisertaciones = false;
        this.titulo = "Epistolas morales a Lucilio";
      }
      if(numeroLibro === 6){
        this.mostrarReproductor = true;
        this.mostrarMeditaciones = false;
        this.mostrarManual = false;
        this.mostrarBotones = false;
        this.mostrarLecciones = false;
        this.mostrarEpistolaLucilio1 = false;
        this.mostrarEpistolaLucilio2 = false;
        this.mostrarEpistolaLucilio3 = true;
        this.mostrarEpistolaLucilio4 = false;
        this.mostrarEpistolaLucilio5 = false;
        this.mostrarEpistolaLucilio6 = false;
        this.mostrarSobreBrevedad = false;
        this.mostrarDisertaciones = false;
        this.titulo = "Epistolas morales a Lucilio";
      }
      if(numeroLibro === 7){
        this.mostrarReproductor = true;
        this.mostrarMeditaciones = false;
        this.mostrarManual = false;
        this.mostrarBotones = false;
        this.mostrarLecciones = false;
        this.mostrarEpistolaLucilio1 = false;
        this.mostrarEpistolaLucilio2 = false;
        this.mostrarEpistolaLucilio3 = false;
        this.mostrarEpistolaLucilio4 = true;
        this.mostrarEpistolaLucilio5 = false;
        this.mostrarEpistolaLucilio6 = false;
        this.mostrarSobreBrevedad = false;
        this.mostrarDisertaciones = false;
        this.titulo = "Epistolas morales a Lucilio";
      }
      if(numeroLibro === 8){
        this.mostrarReproductor = true;
        this.mostrarMeditaciones = false;
        this.mostrarManual = false;
        this.mostrarBotones = false;
        this.mostrarLecciones = false;
        this.mostrarEpistolaLucilio1 = false;
        this.mostrarEpistolaLucilio2 = false;
        this.mostrarEpistolaLucilio3 = false;
        this.mostrarEpistolaLucilio4 = false;
        this.mostrarEpistolaLucilio5 = true;
        this.mostrarEpistolaLucilio6 = false;
        this.mostrarSobreBrevedad = false;
        this.mostrarDisertaciones = false;
        this.titulo = "Epistolas morales a Lucilio";
      }
      if(numeroLibro === 9){
        this.mostrarReproductor = true;
        this.mostrarMeditaciones = false;
        this.mostrarManual = false;
        this.mostrarBotones = false;
        this.mostrarLecciones = false;
        this.mostrarEpistolaLucilio1 = false;
        this.mostrarEpistolaLucilio2 = false;
        this.mostrarEpistolaLucilio3 = false;
        this.mostrarEpistolaLucilio4 = false;
        this.mostrarEpistolaLucilio5 = false;
        this.mostrarEpistolaLucilio6 = true;
        this.mostrarSobreBrevedad = false;
        this.mostrarDisertaciones = false;
        this.titulo = "Epistolas morales a Lucilio";
      }
      if(numeroLibro === 10){
        this.mostrarReproductor = true;
        this.mostrarMeditaciones = false;
        this.mostrarManual = false;
        this.mostrarBotones = false;
        this.mostrarLecciones = false;
        this.mostrarEpistolaLucilio1 = false;
        this.mostrarEpistolaLucilio2 = false;
        this.mostrarEpistolaLucilio3 = false;
        this.mostrarEpistolaLucilio4 = false;
        this.mostrarEpistolaLucilio5 = false;
        this.mostrarEpistolaLucilio6 = false;
        this.mostrarSobreBrevedad = true;
        this.mostrarDisertaciones = false;
        this.titulo = "Sobre la brevedad de la vida";
      }
      if(numeroLibro === 11){
        this.mostrarReproductor = true;
        this.mostrarMeditaciones = false;
        this.mostrarManual = false;
        this.mostrarBotones = false;
        this.mostrarLecciones = false;
        this.mostrarEpistolaLucilio1 = false;
        this.mostrarEpistolaLucilio2 = false;
        this.mostrarEpistolaLucilio3 = false;
        this.mostrarEpistolaLucilio4 = false;
        this.mostrarEpistolaLucilio5 = false;
        this.mostrarEpistolaLucilio6 = false;
        this.mostrarSobreBrevedad = false;
        this.mostrarDisertaciones = true;
        this.titulo = "Disertaciones - Revisar la lista de reproducción";
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
