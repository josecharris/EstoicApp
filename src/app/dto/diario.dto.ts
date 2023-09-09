export class DiarioDTO{
    public fecha: string = "";
    public titulo: string = "";
    public contenido: string = "";
    constructor(fecha: string, titulo: string, contenido: string){
        this.fecha = fecha;
        this.titulo = titulo;
        this.contenido = contenido;
    }
}