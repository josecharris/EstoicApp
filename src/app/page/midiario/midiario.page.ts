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
export class MidiarioPage implements OnInit {

  private idDiario: number;
  private fecha: string;
  public listDiario: DiarioDTO[] = [];
  public mostrarAcordeon = false;
  public mapaDiarios = new Map<string, DiarioDTO[]>();

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

  ngOnInit() { }

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

  public editarRegistro( diarioDTO: DiarioDTO ): void{
    this.lecturaPasoParametrosService.infoLibro.clear();
    this.lecturaPasoParametrosService.infoLibro.set("idDiario", diarioDTO.idDiario.toString());
    this.lecturaPasoParametrosService.infoLibro.set("titulo", diarioDTO.titulo);
    this.lecturaPasoParametrosService.infoLibro.set("contenido", diarioDTO.contenido);
    this.router.navigate(['/tab-inicial/form-diario']);
  }

  public crearRegistro(): void{
    this.router.navigate(['/tab-inicial/form-diario']);
  }

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

  async mostrarMensaje(titulo: string, texto: string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: texto,
      buttons: ["OK"],
    });
    await alert.present();
  }

}
