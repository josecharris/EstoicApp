import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DiarioDTO } from '../dto/diario.dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FileLoaderService {
  constructor(private http: HttpClient) {}

  obtenerRegistros(fileUrl: string): Observable<DiarioDTO[]> {
    return new Observable<DiarioDTO[]>((observer) => {
      this.loadFileData(fileUrl).subscribe((data) => {
        const registrosDiario: DiarioDTO[] = [];
        if (data != null) {
          const cadenas: string[] = data.split('\n');
          cadenas.forEach((cadena) => {
            const infoCadena: string[] = cadena.split(';');
            registrosDiario.push(new DiarioDTO(infoCadena[0], infoCadena[1], infoCadena[2]));
          });
        }
        observer.next(registrosDiario);
        observer.complete();
      });
    });
  }

  private loadFileData(fileUrl: string): Observable<string> {
    return this.http.get(fileUrl, { responseType: 'text' });
  }
}