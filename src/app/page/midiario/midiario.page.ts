import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { DiarioDTO } from 'src/app/dto/diario.dto';
import { filter } from 'rxjs/operators';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';


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

  constructor( private router: Router, private sqlite: SQLite ) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.listDiario = [];
        this.mapaDiarios = new Map<string, DiarioDTO[]>();
        this.cargarInfo();
      });
  }

  ngOnInit() {
  }

  private cargarInfo(): void{
    this.sqlite.create({
      name: "data.db",
      location: "default"
    }).then(db =>{
      db.executeSql('CREATE TABLE IF NOT EXISTS DIARIO(fecha varchar(15), titulo varchar(50), contenido varchar(1000))', [])
      .then(result => {
        db.executeSql('SELECT * FROM DIARIO', [])
        .then(result => {
          for(let i=0; i<result.rows.length; i++){
            this.listDiario.push(new DiarioDTO(result.rows.item(i).fecha, result.rows.item(i).titulo, result.rows.item(i).contenido));
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

  public editarRegistro(): void{

  }

  public eliminarRegistro(): void{
    
  }

  public crearRegistro(): void{
    this.router.navigate(['/tab-inicial/form-diario']);
  }

}
