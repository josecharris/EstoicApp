import { Component, OnInit } from '@angular/core';
import { DiarioDTO } from 'src/app/dto/diario.dto';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form-diario',
  templateUrl: './form-diario.page.html',
  styleUrls: ['./form-diario.page.scss'],
})
export class FormDiarioPage implements OnInit {
  public mostrarMensajeError: boolean = false;
  public titulo: string = "";
  public contenido: string = "";
  constructor( private router: Router) { }

  ngOnInit() { }

  public guardarInfo(){
    if(this.titulo != "" && this.contenido != ""){
      this.mostrarMensajeError = false;
      let fecha: Date = new Date();
      let desdeStr = `${fecha.getFullYear()}-${('0'+(fecha.getMonth()+1)).slice(-2)}-${fecha.getDate()}`;
      let diarioDTO: DiarioDTO = new DiarioDTO(desdeStr, this.titulo, this.contenido);
      this.agregarDiario( diarioDTO );
    }else{
      this.mostrarMensajeError = true;
    }
  }

  private agregarDiario(nuevoRegistro: DiarioDTO) : void{
    
  }

  public redirigirAnterior(): void{
    this.router.navigate(['/tab-inicial/midiario']);
  }

  

}
