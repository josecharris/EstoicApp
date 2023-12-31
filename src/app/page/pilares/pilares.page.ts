import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pilares',
  templateUrl: './pilares.page.html',
  styleUrls: ['./pilares.page.scss'],
})
export class PilaresPage implements OnInit {

  constructor( private router: Router ) { }

  ngOnInit() {
  }

  /**
   * <b>Descripción:</b> Método encargado redirigir a la pantalla de conceptos<br>
   * @author jcharris
  */
  public volver(): void{
    this.router.navigate(['/tab-inicial/conceptos']);
  }

}
