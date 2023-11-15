import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { LecturaPasoParametrosService } from 'src/app/service/lectura-paso-parametros.service';
import { AlertController } from '@ionic/angular';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-form-diario',
  templateUrl: './form-diario.page.html',
  styleUrls: ['./form-diario.page.scss'],
})
/** 
 * <b>Descripción:</b> Componente que determina el componente para la creación y actualización de 
 * los registros del diario<br>
 * @autor jcharris
*/
export class FormDiarioPage implements OnInit {
  /** Atributo que determina el indicador si se muestra mensaje de error */
  public mostrarMensajeError: boolean = false;

  /** Atributo que determina el modo de ejecución de la pantalla */
  public modoActualizacion: boolean = false;

  /** Atributo que determina el identificador del registro del diario */
  public idDiario: number;

  /** Atributo que determina el título de la pantalla */
  public titulo: string;

  /** Atributo que determina el contenido */
  public contenido: string;

  /** Atributo que determina el registro de sqlite */
  public db: SQLiteObject;
  
  /** 
   * <b>Descripción:</b> constructor del componente<br>
   * @author jcharris
   * @param router  Parámetro que determina la navegación entre componentes
   * @param sqlite  Parámetro que determina la instancia con el motor de BD
   * @param lecturaPasoParametrosService  Parámetro que determina el paso de información
   *                                      entre pantallas.
   * @param alertController Parámetro que determina el servicio para mostrar mensajes al usuario
  */
  constructor( private router: Router, private sqlite: SQLite,
    private lecturaPasoParametrosService: LecturaPasoParametrosService,
    public alertController: AlertController ) { }

  /**
   * <b>Descripción:</b> Determina la construcción del componente<br>
   * @author jcharris
  */
  ngOnInit() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.createOpenDatabase();
      });
  }

  /**
   * <b>Descripción:</b> Método encargado de persistir información de diario<br>
   * @author jcharris
  */
  public guardarInfo(): void{
    if( this.titulo != undefined && this.titulo != "" && this.contenido != undefined && this.contenido != "" ){
      this.mostrarMensajeError = false;
      let fecha: Date = new Date();
      let desdeStr = `${fecha.getFullYear()}-${('0'+(fecha.getMonth()+1)).slice(-2)}-${fecha.getDate()}`;
      this.agregarDiario( desdeStr);
    }else{
      this.mostrarMensajeError = true;
    }
  }

  /**
   * <b>Descripción:</b> Método encargado de crear la conexión con la base de datos<br>
   * @author jcharris
  */
  private createOpenDatabase(): void{
    this.sqlite.create({
      name: "data.db",
      location: "default"
    }).then(result =>{
      this.db = result;
    }).catch(error=>{
      this.mostrarMensaje("¡ERROR!", error);
    })
    if( this.lecturaPasoParametrosService.infoLibro.get("idDiario") != null ){
      this.idDiario = Number(this.lecturaPasoParametrosService.infoLibro.get("idDiario"));
      this.titulo = this.lecturaPasoParametrosService.infoLibro.get("titulo")!;
      this.contenido = this.lecturaPasoParametrosService.infoLibro.get("contenido")!;
      this.modoActualizacion = true;
    }
    this.lecturaPasoParametrosService.infoLibro.clear();
  }

  /**
   * <b>Descripción:</b> Método encargado de agregar un nuevo registro al diario<br>
   * @author jcharris
   * @param fecha Parámetro que determina la fecha relacionada con el registro de diario.
  */
  private agregarDiario(fecha: string) : void{
    let query: string = "";
    if(!this.modoActualizacion){
      query = "INSERT INTO DIARIO (fecha, titulo, contenido) VALUES ('" + fecha +"', '"+this.titulo +"', '"+ this.contenido +"')";
      this.db.executeSql(query, [])
      .then(( ) => {
        this.titulo = "";
        this.contenido = "";
        this.mostrarMensaje("¡Operación exitosa!", "Registro creado.");
        this.redirigirAnterior();
      }).catch(error=>{
        this.mostrarMensaje("¡ERROR!", error);
      })
    }else{
      this.db.executeSql("UPDATE DIARIO SET titulo=?, contenido=? WHERE idDiario=?", [this.titulo, this.contenido, this.idDiario])
      .then(( ) => {
        this.mostrarMensaje("¡Operación exitosa!", "Registro actualizado.");
        this.redirigirAnterior();
      }).catch(error => {
        this.mostrarMensaje("¡ERROR!", error);
      })
    }
  }

  /**
   * <b>Descripción:</b> Método encargado de redirigir hacia el componente que invocó
   * la pantalla de diario<br>
   * @author jcharris
  */
  private redirigirAnterior(): void{
    this.router.navigate(['/tab-inicial/midiario']);
  }

  /**
   * <b>Descripción:</b> Método encargado mostrar mensaje al usuario<br>
   * @author jcharris
   * @param titulo Parámetro que determina el título
   * @param texto Parámetro que determina el texto
  */
  async mostrarMensaje(titulo: string, texto: string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: texto,
      buttons: ["OK"],
    });
    await alert.present();
  }

}
