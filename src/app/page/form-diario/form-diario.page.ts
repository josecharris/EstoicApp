import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DiarioDTO } from 'src/app/dto/diario.dto';

@Component({
  selector: 'app-form-diario',
  templateUrl: './form-diario.page.html',
  styleUrls: ['./form-diario.page.scss'],
})
export class FormDiarioPage implements OnInit {
  public mostrarMensajeError: boolean = false;
  public titulo: string = "";
  public contenido: string = "";
  public readonly nombreArchivo = "http://localhost:3000/src/assets/files/json/diario.json";
  private registrosSubject = new BehaviorSubject<DiarioDTO[]>([]);

  constructor( private http: HttpClient ) {
    this.cargarRegistros();
  }

  ngOnInit() {
  }

  public guardarInfo(){
    if(this.titulo != "" && this.contenido != ""){
      this.mostrarMensajeError = false;
      let fecha: Date = new Date();
      let desdeStr = `${fecha.getFullYear()}-${('0'+(fecha.getMonth()+1)).slice(-2)}-${fecha.getDate()}`;
      let diarioDTO: DiarioDTO = new DiarioDTO(desdeStr, this.titulo, this.contenido);
      this.agregarRegistro( diarioDTO );
    }else{
      this.mostrarMensajeError = true;
    }
  }

  private cargarRegistros() {
    this.http.get<any[]>(this.nombreArchivo).subscribe((registros) => {
      this.registrosSubject.next(registros || []); // Inicializa como un arreglo vacío si no hay datos

    });
  }

  get registros$() {
    return this.registrosSubject.asObservable();
  }

  public agregarRegistro(nuevoRegistro: DiarioDTO) {
    let diarios: DiarioDTO[] = this.registrosSubject.value;
    diarios.push(nuevoRegistro);
    this.registrosSubject.next(diarios);
    this.http.put(this.nombreArchivo, diarios).subscribe(() => {
      console.log('Nuevo registro agregado con éxito.');
    });
  }

  

}
