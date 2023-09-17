import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DiarioDTO } from 'src/app/dto/diario.dto';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Encoding, FileWriteResult } from '@capacitor/filesystem/dist/esm/definitions';


@Component({
  selector: 'app-form-diario',
  templateUrl: './form-diario.page.html',
  styleUrls: ['./form-diario.page.scss'],
})
export class FormDiarioPage implements OnInit {
  public mostrarMensajeError: boolean = false;
  public titulo: string = "";
  public contenido: string = "";

  constructor( private http: HttpClient ) {
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

  private obtenerContenidoArchivo(rutaArchivo: string) : string{
    let retorno = "";
    const archivo = Filesystem.readFile({
      path: rutaArchivo,
      directory: Directory.Documents,
      encoding: Encoding.UTF8,
    }).then(result =>{
      retorno = result.data.toString();
    }).catch(() =>{
      Filesystem.mkdir({
        path: rutaArchivo,
        directory: Directory.Documents
      }).then(() => {
        //CREAR ARCHIVO
        Filesystem.writeFile({
          path: rutaArchivo,
          data: "",
          directory: Directory.Documents,
          encoding: Encoding.UTF8, // Puedes cambiar la codificación según tus necesidades
        })
        alert("Archivo creado");
      }).catch(error => {
        alert("ERROR!!!");
      });
    });
    return retorno;
  }

  public agregarRegistro(nuevoRegistro: DiarioDTO) {
    try{
      let contenido: any = this.obtenerContenidoArchivo('diario.json');
      let diarios: DiarioDTO[] = [];
      if(contenido === ""){
        diarios = [];
      }else{
        let listaContenido: DiarioDTO[] = JSON.parse(contenido);
        diarios = listaContenido;
      }
      diarios.push(nuevoRegistro);
      const updatedData = JSON.stringify(diarios);
      Filesystem.writeFile({
        path: 'diario.json',
        data: updatedData,
        directory: Directory.Documents,
        encoding: Encoding.UTF8,
        recursive: false
      }).then(result => {
        if(result.uri){
          alert('Se actualizó el DOC');
          this.titulo = "";
          this.contenido = "";
        }else{
          alert('NO SE ACTUALIZO EL DOC');
        }
      });
    }catch(error){
      alert('Error al actualizar el archivo JSON:');
    }
    
  }

  

}
