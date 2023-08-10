import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mandamientos',
  templateUrl: './mandamientos.page.html',
  styleUrls: ['./mandamientos.page.scss'],
})
export class MandamientosPage implements OnInit {

  constructor( private router: Router ) { }

  ngOnInit() {
  }

  public volver(): void{
    this.router.navigate(['/tab-inicial/conceptos']);
  }

}
