import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-material',
  templateUrl: './material.page.html',
  styleUrls: ['./material.page.scss'],
})
export class MaterialPage implements OnInit {

  constructor( private router: Router ) { }

  ngOnInit() {
  }

  public navegarAudioLibros(){
    this.router.navigate(['/tab-inicial/audiolibro']);
  }

  public navegarReflexion(){
    this.router.navigate(['/tab-inicial/reflexion']);
  }

}
