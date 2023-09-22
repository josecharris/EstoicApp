import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { LecturaPasoParametrosService } from 'src/app/service/lectura-paso-parametros.service';


@Component({
  selector: 'app-form-diario',
  templateUrl: './form-diario.page.html',
  styleUrls: ['./form-diario.page.scss'],
})
export class FormDiarioPage implements OnInit {
  public mostrarMensajeError: boolean = false;
  public modoActualizacion: boolean = false;
  public idDiario: number;
  public titulo: string;
  public contenido: string;
  public db: SQLiteObject;

  constructor( private router: Router, private sqlite: SQLite,
    private lecturaPasoParametrosService: LecturaPasoParametrosService ) { }

  ngOnInit() {
    this.createOpenDatabase();
  }

  public guardarInfo(){
    if(this.titulo != "" && this.contenido != ""){
      this.mostrarMensajeError = false;
      let fecha: Date = new Date();
      let desdeStr = `${fecha.getFullYear()}-${('0'+(fecha.getMonth()+1)).slice(-2)}-${fecha.getDate()}`;
      this.agregarDiario( desdeStr);
    }else{
      this.mostrarMensajeError = true;
    }
  }

  private createOpenDatabase(): void{
    if( this.lecturaPasoParametrosService.infoLibro.get("idDiario") != null ){
      this.idDiario = Number(this.lecturaPasoParametrosService.infoLibro.get("idDiario"));
      this.titulo = this.lecturaPasoParametrosService.infoLibro.get("titulo")!;
      this.contenido = this.lecturaPasoParametrosService.infoLibro.get("contenido")!;
      this.modoActualizacion = true;
    }else{
      this.sqlite.create({
        name: "data.db",
        location: "default"
      }).then(result =>{
        this.db = result;
      }).catch(error=>{
        alert(error);
      })
    }
  }

  private agregarDiario(fecha: string) : void{
    let query: string = "";
    if(!this.modoActualizacion){
      query = "INSERT INTO DIARIO (fecha, titulo, contenido) VALUES ('" + fecha +"', '"+this.titulo +"', '"+ this.contenido +"')";
      this.db.executeSql(query, [])
      .then(result => {
        this.titulo = "";
        this.contenido = "";
        this.redirigirAnterior();
      }).catch(error=>{
        alert(error);
      })
    }else{
      this.db.executeSql("UPDATE DIARIO SET titulo=?, contenido=? WHERE ?", [this.titulo, this.contenido, this.idDiario])
      .then(( ) => {
        alert("Registro actualizado.");
      }).catch(error => {
        alert(error);
      })
    }
    
    
  }

  public redirigirAnterior(): void{
    this.router.navigate(['/tab-inicial/midiario']);
  }

  

}
