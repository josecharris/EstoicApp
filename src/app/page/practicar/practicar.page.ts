import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-practicar',
  templateUrl: './practicar.page.html',
  styleUrls: ['./practicar.page.scss'],
})
export class PracticarPage implements OnInit {

  constructor( private router: Router ) { }

  ngOnInit() {
  }

  public navegarPreguntas(){
    this.router.navigate(['/tab-inicial/preguntas']);
  }

}
