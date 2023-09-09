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

  constructor( private router: Router, private fileLoaderService: FileLoaderService ) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.listDiario = this.fileLoaderService.obtenerRegistros( this.URL_DIARIO );
        this.mostrarAcordeon = this.listDiario.length > 0; 
      });
  }

  ngOnInit() {
  }

  public crearRegistro(): void {
    
  }

}
