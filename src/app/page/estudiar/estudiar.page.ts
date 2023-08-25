import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-estudiar',
  templateUrl: './estudiar.page.html',
  styleUrls: ['./estudiar.page.scss'],
})
export class EstudiarPage implements OnInit {

  constructor( private router: Router ) { }

  ngOnInit() {
  }
  public navegarIntroduccion(){
    this.router.navigate(['/tab-inicial/introduccion']);
  }

  public navegarConceptos(): void {
    this.router.navigate(['/tab-inicial/conceptos']);
  }

  public navegarLecturas(): void {
    this.router.navigate(['/tab-inicial/lecturas']);
  }

  public navegarFrases(): void {
    this.router.navigate(['/tab-inicial/frases']);
  }

}
