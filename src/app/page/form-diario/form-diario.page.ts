import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-diario',
  templateUrl: './form-diario.page.html',
  styleUrls: ['./form-diario.page.scss'],
})
export class FormDiarioPage implements OnInit {
  public mostrarMensajeError: boolean = false;
  public titulo: string = "";
  public contenido: string = "";
  constructor() { }

  ngOnInit() {
  }

  public guardarInfo(){
    if(this.titulo != "" && this.contenido != ""){
      this.mostrarMensajeError = false;
    }else{
      this.mostrarMensajeError = true;
    }
  }

}
