import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { DiarioDTO } from 'src/app/dto/diario.dto';
import { filter } from 'rxjs/operators';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { LecturaPasoParametrosService } from 'src/app/service/lectura-paso-parametros.service';


@Component({
  selector: 'app-midiario',
  templateUrl: './midiario.page.html',
  styleUrls: ['./midiario.page.scss'],
  providers:  [ ]
})
export class MidiarioPage implements OnInit {

  public listDiario: DiarioDTO[] = [];
  public mostrarAcordeon = false;
  public mapaDiarios = new Map<string, DiarioDTO[]>();
  public alertButtons = [
    {
      text: 'Cancel',
      role: 'cancel',
      handler: () => {
        console.log('Alert canceled');
      },
    },
    {
      text: 'OK',
      role: 'confirm',
      handler: () => {
        console.log('Alert confirmed');
      },
    },
  ];

  constructor( private router: Router, private sqlite: SQLite, 
    private lecturaPasoParametrosService: LecturaPasoParametrosService ) {
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
          alert(error);
        })
      }).catch(error => {
        alert(error);
      });
    }).catch(error=>{
      alert(error);
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

  public setResult(ev: any, idDiario: number, fecha: string) {
    alert("IN");
    if(ev.detail.role == "confirm"){
      alert("Confirm!");
      this.sqlite.create({
        name: "data.db",
        location: "default"
      }).then(db =>{
        db.executeSql('CREATE TABLE IF NOT EXISTS DIARIO(idDiario INTEGER PRIMARY KEY AUTOINCREMENT, fecha varchar(15), titulo varchar(50), contenido varchar(1000))', [])
        .then(result => {
          db.executeSql('DELETE FROM DIARIO WHERE idDiario=?', [idDiario])
          .then(result => {
            alert("¡Registro eliminado!");
            let diarioFecha: DiarioDTO[] = this.mapaDiarios.get(fecha) ?? [];
            this.mapaDiarios.set(fecha, diarioFecha?.filter(diario => diario.idDiario !=idDiario));
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

}
