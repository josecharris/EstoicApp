import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-estudiar',
  templateUrl: './estudiar.page.html',
  styleUrls: ['./estudiar.page.scss'],
})

/** 
 * <b>Descripción:</b> Componente que determina el componente para la funcionalidad de estudiar<br>
 * @autor jcharris
*/
export class EstudiarPage implements OnInit {

  /** 
   * <b>Descripción:</b> constructor del componente<br>
   * @author jcharris
   * @param router  Parámetro que determina la navegación entre componentes
  */
  constructor( private router: Router ) { }

  /**
   * <b>Descripción:</b> Determina la construcción del componente<br>
   * @author jcharris
  */
  ngOnInit() {
  }

  /**
   * <b>Descripción:</b> Método encargado de navegar a la página de introducción<br>
   * @author jcharris
  */
  public navegarIntroduccion(): void{
    this.router.navigate(['/tab-inicial/introduccion']);
  }

  /**
   * <b>Descripción:</b> Método encargado de navegar a la pantalla de conceptos<br>
   * @author jcharris
  */
  public navegarConceptos(): void {
    this.router.navigate(['/tab-inicial/conceptos']);
  }

  /**
   * <b>Descripción:</b> Método encargado de navegar a la pantalla de lecturas<br>
   * @author jcharris
  */
  public navegarLecturas(): void {
    this.router.navigate(['/tab-inicial/lecturas']);
  }

  /**
   * <b>Descripción:</b> Método encargado de navegar a la pantalla de frase<br>
   * @author jcharris
  */
  public navegarFrases(): void {
    this.router.navigate(['/tab-inicial/frases']);
  }

}
