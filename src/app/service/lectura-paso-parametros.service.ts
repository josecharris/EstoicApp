import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LecturaPasoParametrosService {

  public infoLibro = new Map<string, Object>();

  constructor( ) { }
}
