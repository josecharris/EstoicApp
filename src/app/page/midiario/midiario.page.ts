import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { DiarioDTO } from 'src/app/dto/diario.dto';
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
        this.mapaDiarios = new Map<string, DiarioDTO[]>();
        this.cargarDiario();
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
  }

  ngOnInit() {
  }

  private cargarDiario() : void{
    
  }

  public crearRegistro(): void{
    this.router.navigate(['/tab-inicial/form-diario']);
  }

}
