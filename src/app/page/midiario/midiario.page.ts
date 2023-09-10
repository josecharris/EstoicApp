import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DiarioDTO } from 'src/app/dto/diario.dto';
import jsonFile from  './../../../assets/files/json/diario.json';



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
    this.listDiario = [];
    this.cargarJSON();
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
  }

  ngOnInit() {
  }

  private cargarJSON() {
    this.listDiario = jsonFile.map((diario: any) => {
      const fecha = diario.fecha;
      const titulo = diario.titulo;
      const contenido = diario.contenido;
      return new DiarioDTO( fecha, titulo, contenido );
    });
  }

  public crearRegistro(): void{
    this.router.navigate(['/tab-inicial/form-diario']);
  }

}
