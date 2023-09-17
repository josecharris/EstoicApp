import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { DiarioDTO } from 'src/app/dto/diario.dto';
import { Directory, Encoding, Filesystem } from '@capacitor/filesystem';
import { filter } from 'rxjs/operators';

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

  constructor( private router: Router ) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.listDiario = [];
        this.obtenerContenidoArchivo('diario.json');
      });
  }

  ngOnInit() {
  }

  private obtenerContenidoArchivo(rutaArchivo: string) : void{
    const archivo = Filesystem.readFile({
      path: rutaArchivo,
      directory: Directory.Documents,
      encoding: Encoding.UTF8,
    }).then(result =>{
      let contenido: string = result.data.toString();
      if(contenido === ""){
        this.listDiario = [];
      }else{
        let listaContenido: DiarioDTO[] = JSON.parse(contenido);
        this.listDiario = listaContenido;
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
    }).catch(() =>{
      //CREAR ARCHIVO
      Filesystem.writeFile({
        path: rutaArchivo,
        data: "",
        directory: Directory.Documents,
        encoding: Encoding.UTF8, // Puedes cambiar la codificación según tus necesidades
      })
      this.listDiario = [];
      alert("Archivo creado");
    });
  }

  public crearRegistro(): void{
    this.router.navigate(['/tab-inicial/form-diario']);
  }

}
