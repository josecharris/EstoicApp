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

  public navegarMeditaciones(): void {
    this.router.navigate(['/tab-inicial/conceptos']);
  }

}
