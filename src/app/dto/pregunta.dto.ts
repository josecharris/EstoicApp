export class Pregunta{
    public descripcion: string = "";
    public primeraOpcion: string = "";
    public segundaOpcion: string = "";
    public terceraOpcion: string = "";
    public respuestaCorrecta: number = 0;
    constructor(descripcion: string, primeraOpcion: string, segundaOpcion: string, terceraOpcion: string,
        respuestaCorrecta: number){
        this.descripcion = descripcion;
        this.primeraOpcion = primeraOpcion;
        this.segundaOpcion = segundaOpcion;
        this.terceraOpcion = terceraOpcion;
        this.respuestaCorrecta = respuestaCorrecta;
    }
}