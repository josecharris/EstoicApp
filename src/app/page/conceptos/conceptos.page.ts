import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conceptos',
  templateUrl: './conceptos.page.html',
  styleUrls: ['./conceptos.page.scss'],
})
/** 
 * <b>Descripción:</b> Componente que determina el componente para la administración
 * de conceptos importantes<br>
 * @autor jcharris
*/
export class ConceptosPage implements OnInit {

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
  ngOnInit() { }

  /**
   * <b>Descripción:</b> Método encargado de redirigir a la pantalla de pilares<br>
   * @author jcharris
  */
  public navegarPilares(): void{
    this.router.navigate(['/tab-inicial/pilares']);
  }

  /**
   * <b>Descripción:</b> Método encargado de redirigir a la pantalla de mandamientos<br>
   * @author jcharris
  */
  public navegarMandamientos(): void{
    this.router.navigate(['/tab-inicial/mandamientos']);
  }

  /**
   * <b>Descripción:</b> Método encargado de redirigir a la pantalla de triada estoica<br>
   * @author jcharris
  */
  public navegarTriada(): void{
    this.router.navigate(['/tab-inicial/triada']);
  }

}
