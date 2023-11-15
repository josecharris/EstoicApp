import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { DiarioDTO } from 'src/app/dto/diario.dto';
import { filter } from 'rxjs/operators';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { LecturaPasoParametrosService } from 'src/app/service/lectura-paso-parametros.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-midiario',
  templateUrl: './midiario.page.html',
  styleUrls: ['./midiario.page.scss'],
  providers:  [ ]
})

/** 
 * <b>Descripción:</b> Componente que determina el componente la administración de la información de diarios<br>
 * @autor jcharris
*/
export class MidiarioPage implements OnInit {

  /** Atributo que determina la lista de reflexiones diarias realizadas por el usuario */
  public listDiario: DiarioDTO[] = [];

  /** Atributo que determina el indicador para mostrar el componente de acordeón*/
  public mostrarAcordeon = false;

  /** Atributo que determina la información de diarios clasificada por fecha */
  public mapaDiarios = new Map<string, DiarioDTO[]>();

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
    public alertController: AlertController ) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.listDiario = [];
        this.mapaDiarios = new Map<string, DiarioDTO[]>();
        this.cargarInfo();
      });
  }

  /**
   * <b>Descripción:</b> Determina la construcción del componente<br>
   * @author jcharris
  */
  ngOnInit() { }

  /**
   * <b>Descripción:</b> Método encargado de cargar la información relacionadas con las
   * reflexiones diarias realizadas por el usuario.<br>
   * @author jcharris
  */
  private cargarInfo(): void{
    this.sqlite.create({
      name: "data.db",
      location: "default"
    }).then(db =>{
      db.executeSql('CREATE TABLE IF NOT EXISTS DIARIO(idDiario INTEGER PRIMARY KEY AUTOINCREMENT, fecha varchar(15), titulo varchar(50), contenido varchar(1000))', [])
      .then(result => {
        db.executeSql('SELECT * FROM DIARIO', [])
        .then(result => {
          for(let i=0; i<result.rows.length; i++){
            this.listDiario.push(new DiarioDTO(result.rows.item(i).idDiario, result.rows.item(i).fecha, 
              result.rows.item(i).titulo, result.rows.item(i).contenido));
          }
          this.mostrarAcordeon = this.listDiario.length > 0;
            if( this.listDiario.length > 0 ){
              this.listDiario.forEach(diario => {
                if (this.mapaDiarios.has(diario.fecha)) {
                  this.mapaDiarios.get(diario.fecha)?.push(diario);
                } else {
                  this.mapaDiarios.set(diario.fecha, [diario]);
                }
              });
            }
        }).catch(error => {
          this.mostrarMensaje("Se presentó el siguiente error:", error);
        })
      }).catch(error => {
        this.mostrarMensaje("Se presentó el siguiente error:", error);
      });
    }).catch(error=>{
      this.mostrarMensaje("Se presentó el siguiente error:", error);
    })
  }

  /**
   * <b>Descripción:</b> Método encargado de editar los registros de diario<br>
   * @author jcharris
   * @param diarioDTO Parámetro que determina la información del registro de diario
  */
  public editarRegistro( diarioDTO: DiarioDTO ): void{
    this.lecturaPasoParametrosService.infoLibro.clear();
    this.lecturaPasoParametrosService.infoLibro.set("idDiario", diarioDTO.idDiario.toString());
    this.lecturaPasoParametrosService.infoLibro.set("titulo", diarioDTO.titulo);
    this.lecturaPasoParametrosService.infoLibro.set("contenido", diarioDTO.contenido);
    this.router.navigate(['/tab-inicial/form-diario']);
  }

  /**
   * <b>Descripción:</b> Método encargado de navegar al formulario para la persistencia de la información<br>
   * @author jcharris
  */
  public crearRegistro(): void{
    this.router.navigate(['/tab-inicial/form-diario']);
  }

  /**
   * <b>Descripción:</b> Método encargado de confirmar si se quiere realizar la operación de eliminación<br>
   * @author jcharris
   * @param idDiario Parámetro que determina el identificador del registro de diario
   * @param fecha Parámetro que determina la información de la fecha
  */
  async eliminar( idDiario: number, fecha: string ) {
    const alert = await this.alertController.create({
      header: 'Confirmación',
      message: '¿Estás seguro de querer eliminar el registro?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Acción de cancelar');
          }
        },
        {
          text: 'Confirmar',
          handler: () => {
            this.eliminarRegistro(idDiario, fecha);
          }
        }
      ]
    });
    await alert.present();
  }

  /**
   * <b>Descripción:</b> Método encargado de eliminar un registro de diario<br>
   * @author jcharris
   * @param idDiario Parámetro que determina el identificador del registro de diario
   * @param fecha Parámetro que determina la información de la fecha
  */
  public eliminarRegistro( idDiario: number, fecha: string ){
    if( idDiario !== null && idDiario !== undefined && fecha !== null && fecha !== undefined ){
      this.sqlite.create({
        name: "data.db",
        location: "default"
      }).then(db =>{
        db.executeSql('CREATE TABLE IF NOT EXISTS DIARIO(idDiario INTEGER PRIMARY KEY AUTOINCREMENT, fecha varchar(15), titulo varchar(50), contenido varchar(1000))', [])
        .then(result => {
          db.executeSql('DELETE FROM DIARIO WHERE idDiario=?', [idDiario])
          .then(result => {
            let diarioFecha: DiarioDTO[] = this.mapaDiarios.get(fecha) ?? [];
            let filtroAplicado = diarioFecha?.filter(diario => diario.idDiario !=idDiario);
            if(filtroAplicado.length > 0){
              this.mapaDiarios.set(fecha, diarioFecha?.filter(diario => diario.idDiario !=idDiario));
            }else{
              this.mapaDiarios.clear();
              this.mostrarAcordeon = false;
            }
            this.mostrarMensaje("¡Eliminado!", "El registro fue eliminado exitosamente.");
          }).catch(error => {
            alert(error);
          })
        }).catch(error => {
          alert(error);
        });
      }).catch(error=>{
        alert(error);
      })
    }
  }

  /**
   * <b>Descripción:</b> Método encargado de mostrar un mensaje descriptivo al usuario<br>
   * @author jcharris
   * @param titulo Parámetro que determina el título del modal informativo
   * @param texto Parámetro que determina el texto descriptivo a mostrar
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
