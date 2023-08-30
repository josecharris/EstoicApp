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
        this.mostrarBotones = false;
        this.titulo = "Meditaciones";
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
  }

}
