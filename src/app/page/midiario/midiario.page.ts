import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { DiarioDTO } from 'src/app/dto/diario.dto';
import { FileLoaderService } from 'src/app/service/file-loader.service';


@Component({
  selector: 'app-midiario',
  templateUrl: './midiario.page.html',
  styleUrls: ['./midiario.page.scss'],
  providers:  [ FileLoaderService ]
})
export class MidiarioPage implements OnInit {

  public readonly URL_DIARIO = "./../../../assets/files/txt/diario.txt";
  public listDiario: DiarioDTO[] = [];
  public mostrarAcordeon = false;
  public mapaDiarios = new Map<string, DiarioDTO[]>();

  constructor( private router: Router, private fileLoaderService: FileLoaderService ) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.fileLoaderService.obtenerRegistros( this.URL_DIARIO ).subscribe(data => {
          this.listDiario = data;
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
        });
      });
  }

  ngOnInit() {
  }

  public crearRegistro(): void{
    this.router.navigate(['/tab-inicial/form-diario']);
  }

}
