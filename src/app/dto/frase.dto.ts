export class Frase{
    public frase: string = "";
    public autor: string = "";
    public explicacion: string = "";
    public image: string = "";
    constructor(frase: string, autor: string, explicacion: string, image: string){
        this.frase = frase;
        this.autor = autor;
        this.explicacion = explicacion;
        this.image = image;
    }
}