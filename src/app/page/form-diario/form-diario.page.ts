import { Component, OnInit } from '@angular/core';
import { DiarioDTO } from 'src/app/dto/diario.dto';
import { Router } from '@angular/router';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';


@Component({
  selector: 'app-form-diario',
  templateUrl: './form-diario.page.html',
  styleUrls: ['./form-diario.page.scss'],
})
export class FormDiarioPage implements OnInit {
  public mostrarMensajeError: boolean = false;
  public titulo: string = "";
  public contenido: string = "";
  public db: SQLiteObject;

  constructor( private router: Router, private sqlite: SQLite ) { }

  ngOnInit() {
    this.createOpenDatabase();
  }

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

  private createOpenDatabase(): void{
    this.sqlite.create({
      name: "data.db",
      location: "default"
    }).then(result =>{
      this.db = result;
    }).catch(error=>{
      alert(error);
    })
  }

  private agregarDiario(nuevoRegistro: DiarioDTO) : void{
    let query = "INSERT INTO DIARIO (fecha, titulo, contenido) VALUES ('" + nuevoRegistro.fecha +"', '"+nuevoRegistro.titulo +"', '"+ nuevoRegistro.contenido +"')";
    this.db.executeSql(query, [])
    .then(result => {
      this.redirigirAnterior();
    }).catch(error=>{
      alert(error);
    })
  }

  public redirigirAnterior(): void{
    this.router.navigate(['/tab-inicial/midiario']);
  }

  

}
