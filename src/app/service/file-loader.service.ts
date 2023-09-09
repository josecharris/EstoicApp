import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DiarioDTO } from '../dto/diario.dto';

@Injectable({
  providedIn: 'root',
})
export class FileLoaderService {
  constructor(private http: HttpClient) {}

  private loadFileData(fileUrl: string) {
    return this.http.get(fileUrl, { responseType: 'text' });
  }

  public obtenerRegistros( fileUrl: string ): DiarioDTO[]{
    let registrosDiario: DiarioDTO[] = [];
    this.loadFileData(fileUrl).subscribe((data) => {
      if(data != null){
        let cadenas: string[] = data.split("\n");
        cadenas.forEach(cadena=>{
          let infoCadena: string[] = cadena.split("\n");
          registrosDiario.push(new DiarioDTO(infoCadena[0], infoCadena[1], infoCadena[2]));
        })
      }
    });
    return registrosDiario;
  }
}