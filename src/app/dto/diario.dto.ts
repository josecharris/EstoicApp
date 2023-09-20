export class DiarioDTO{
    public idDiario: number;
    public fecha: string;
    public titulo: string;
    public contenido: string;
    constructor(idDiario:number, fecha: string, titulo: string, contenido: string){
        this.fecha = fecha;
        this.titulo = titulo;
        this.contenido = contenido;
        this.idDiario = idDiario;
    }
}