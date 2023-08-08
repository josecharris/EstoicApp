import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conceptos',
  templateUrl: './conceptos.page.html',
  styleUrls: ['./conceptos.page.scss'],
})
export class ConceptosPage implements OnInit {

  constructor( private router: Router ) { }

  ngOnInit() {
  }

  public navegarPilares(): void{
    this.router.navigate(['/tab-inicial/pilares']);
  }

  public navegarMandamientos(): void{
    this.router.navigate(['/tab-inicial/mandamientos']);
  }

  public navegarTriada(): void{
    this.router.navigate(['/tab-inicial/triada']);
  }

}
