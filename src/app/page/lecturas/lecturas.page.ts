import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lecturas',
  templateUrl: './lecturas.page.html',
  styleUrls: ['./lecturas.page.scss'],
})
export class LecturasPage implements OnInit {

  constructor( private router: Router ) { }

  ngOnInit() {
  }

  public navegarContenedorLectura( numeroLibro: number ): void {
    this.router.navigate(['/tab-inicial/contenedor-lectura']);
  }

  public volver(): void{
    this.router.navigate(['/tab-inicial/estudiar']);
  }

}
