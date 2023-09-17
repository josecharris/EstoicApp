import { Component, OnInit } from '@angular/core';
import { DiarioDTO } from 'src/app/dto/diario.dto';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Encoding, FileWriteResult } from '@capacitor/filesystem/dist/esm/definitions';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form-diario',
  templateUrl: './form-diario.page.html',
  styleUrls: ['./form-diario.page.scss'],
})
export class FormDiarioPage implements OnInit {
  public mostrarMensajeError: boolean = false;
  public titulo: string = "";
  public contenido: string = "";

  constructor( private router: Router) {
  }

  ngOnInit() {
  }

  public guardarInfo(){
    if(this.titulo != "" && this.contenido != ""){
      this.mostrarMensajeError = false;
      let fecha: Date = new Date();
      let desdeStr = `${fecha.getFullYear()}-${('0'+(fecha.getMonth()+1)).slice(-2)}-${fecha.getDate()}`;
      let diarioDTO: DiarioDTO = new DiarioDTO(desdeStr, this.titulo, this.contenido);
      this.obtenerContenidoArchivo( diarioDTO );
    }else{
      this.mostrarMensajeError = true;
    }
  }

  private obtenerContenidoArchivo(nuevoRegistro: DiarioDTO) : void{
    const archivo = Filesystem.readFile({
      path: 'diario.json',
      directory: Directory.Documents,
      encoding: Encoding.UTF8,
    }).then(result =>{
      try{
        let contenido: any = result.data.toString();
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
            this.titulo = "";
            this.contenido = "";
            this.redirigirAnterior();
          }else{
            alert('NO SE ACTUALIZO EL DOC');
          }
        });
      }catch(error){
        alert('Error al actualizar el archivo JSON:');
      }
    }).catch(() =>{
      Filesystem.mkdir({
        path: 'diario.json',
        directory: Directory.Documents
      }).then(() => {
        //CREAR ARCHIVO
        Filesystem.writeFile({
          path: 'diario.json',
          data: "",
          directory: Directory.Documents,
          encoding: Encoding.UTF8, // Puedes cambiar la codificación según tus necesidades
        })
        alert("Archivo creado");
      }).catch(error => {
        alert("ERROR!!!");
      });
    });
  }

  public redirigirAnterior(): void{
    this.router.navigate(['/tab-inicial/midiario']);
  }

  

}
