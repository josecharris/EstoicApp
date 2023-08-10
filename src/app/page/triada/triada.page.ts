import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-triada',
  templateUrl: './triada.page.html',
  styleUrls: ['./triada.page.scss'],
})
export class TriadaPage implements OnInit {

  constructor( private router: Router ) { }

  ngOnInit() {
  }

  public volver(): void{
    this.router.navigate(['/tab-inicial/conceptos']);
  }

}
