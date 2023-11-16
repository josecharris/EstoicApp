import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-audiolibro',
  templateUrl: './audiolibro.page.html',
  styleUrls: ['./audiolibro.page.scss'],
})
/** 
 * <b>Descripción:</b> Componente que determina el componente para la administración
 * de audiolibros<br>
 * @autor jcharris
*/
export class AudiolibroPage implements OnInit {

  /** Atributo que determina el título del componente */
  public titulo: string = "";

  /** Atributo que determina el indicador para mostrar mensaje descriptivo */
  public mostrarMsjCon: boolean = false;

  /** Atributo que determina el indicador para mostrar el reproductor */
  public mostrarReproductor: boolean = false;

  /** Atributo que determina el indicador para mostrar el contenido de meditaciones */
  public mostrarMeditaciones: boolean = false;

  /** Atributo que determina el indicador para mostrar el contenido del manual */
  public mostrarManual: boolean = false;

  /** Atributo que determina el indicador para mostrar el contenido de lecciones */
  public mostrarLecciones: boolean = false;

  /** Atributo que determina el indicador para mostrar la primera epístola a Lucilio */
  public mostrarEpistolaLucilio1: boolean = false;

  /** Atributo que determina el indicador para mostrar la segunda epístola a Lucilio */
  public mostrarEpistolaLucilio2: boolean = false;

  /** Atributo que determina el indicador para mostrar la tercera epístola a Lucilio */
  public mostrarEpistolaLucilio3: boolean = false;

  /** Atributo que determina el indicador para mostrar la cuarta epístola a Lucilio */
  public mostrarEpistolaLucilio4: boolean = false;

  /** Atributo que determina el indicador para mostrar la quinta epístola a Lucilio */
  public mostrarEpistolaLucilio5: boolean = false;

  /** Atributo que determina el indicador para mostrar la sexta epístola a Lucilio */
  public mostrarEpistolaLucilio6: boolean = false;

  /** Atributo que determina el indicador para mostrar el contenido sobre la brevedad de la vida */
  public mostrarSobreBrevedad: boolean = false;

  /** Atributo que determina el indicador para mostrar el contenido sobre las disertaciones */
  public mostrarDisertaciones: boolean = false;

  /** Atributo que determina el indicador para mostrar mostrar los botones */
  public mostrarBotones: boolean = true;

  /** 
   * <b>Descripción:</b> constructor del componente<br>
   * @author jcharris
  */
  constructor() { }

  /**
   * <b>Descripción:</b> Determina la construcción del componente<br>
   * @author jcharris
  */
  ngOnInit() {
  }

  /**
   * <b>Descripción:</b> Método encargado de mostrar el audiolibro seleccionado<br>
   * @author jcharris
   * @param numeroLibro Parámetro que determina el número del libro seleccionado
  */
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

  /**
   * <b>Descripción:</b> Método encargado de habilitar los botones para volver<br>
   * @author jcharris
  */
  public volverBotones(): void{
    this.mostrarBotones = true;
    this.mostrarReproductor = false;
  }

}
