import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationLoader, AnimationOptions } from 'ngx-lottie';
import { AnimationItem } from 'ngx-lottie/lib/symbols';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers: [AnimationLoader]
})
export class HomePage implements OnInit{

  private animation: AnimationItem;

  public options: AnimationOptions = {
    path: "assets/animation/animation-splash.json"
  }

  constructor( private router: Router ) {}

  /**
   * <b>Descripción:</b> Determina la construcción del componente<br>
   * @author jcharris
  */
  ngOnInit() {
    setTimeout(() => {
      this.ocultarAnimacion();
    }, 3000);
  }

  public navegarComponenteMenu(): void {
    this.router.navigate(['/tab-inicial']);
  }

  public created(animation: AnimationItem){
    this.animation = animation;
  }

  public ocultarAnimacion(){
    this.animation.hide();
    this.navegarComponenteMenu();
  }

}
