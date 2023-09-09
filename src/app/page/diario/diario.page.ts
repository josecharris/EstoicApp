import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diario',
  templateUrl: './diario.page.html',
  styleUrls: ['./diario.page.scss'],
})
export class DiarioPage implements OnInit {

  public reflexion: string = "";
  public listaTitulos: string[] = [];

  constructor() { }

  ngOnInit() {
    this.listaTitulos.push("La libertad no se consigue con la saciedad de lo deseado, sino con la supresión del deseo");
    this.listaTitulos.push("En compañía, guárdate de hablar mucho de tus propios actos o de las penalidades que has pasado; pues, aunque a ti te complazca hacer mención de ello, no complacerá a los otros escucharte.");
    this.listaTitulos.push("Es necesario valorarse a sí mismo, porque siempre creemos que podemos soportar más de lo que realmente podemos");
    this.listaTitulos.push("¿Alguien lanza una ofensa contra mí? Él sabrá. Tiene su naturaleza y su actuación particulares. Yo ahora tengo lo que quiere que tenga la naturaleza común y hago lo que ella me dicta");
    this.listaTitulos.push("No hay que enfurecerse con las cosas, porque a ellas nada les importa.");
    this.listaTitulos.push("Vuelve en ti y reanímate. Y una vez que hayas salido de tu sueño y hayas comprendido que te turbaban pesadillas, es decir, una vez despierto, mira esas cosas como mirabas aquellas.");
    this.listaTitulos.push("Debo a Rústico el haber comprendido la necesidad de… leer con reflexión, sin contentarme con una noticia superficial de los escritos; no dar fácil asenso a las personas que charlan de todo fuera de propósito.");
    this.listaTitulos.push("Mira con atención los principios que guían a los sabios, qué cosas evitan y cuáles desean alcanzar.");
    this.listaTitulos.push("¿Quién es el invencible? Aquel a quien no saca de sus casillas nada ajeno al albedrío");
    this.listaTitulos.push("o te dejes arrastrar por el torbellino de las pasiones. Por el contrario, ante cualquier impulso, corresponde con lo justo, y ante cualquier fantasía, conserva la facultad de comprender");
    this.listaTitulos.push("Perseguir imposibles es una locura. Y es imposible que los malvados no cometan tales acciones");
    this.listaTitulos.push("Expulsa la opinión injustificada. Pues es imposible empezar a aprender lo que uno cree saber.");
    this.listaTitulos.push("Destruye la sospecha y se destruye el «se me ha dañado». Destruye la queja de «se me ha dañado» y el daño desaparece.");
    this.listaTitulos.push("La divinidad puso esta ley y dice: «Si quieres algo bueno, tómalo de ti mismo»");
    this.listaTitulos.push("Que una cosa bien hecha, aunque sea poco a poco, no es poca cosa.");
    this.listaTitulos.push("El trabajo nutre los espíritus generosos.");
    this.listaTitulos.push("¿Cuál es tu oficio? Ser bueno");
    this.listaTitulos.push("¿Por qué nos irritamos? ¿Por qué nos quejamos? Para esto hemos sido preparados.");
    this.listaTitulos.push("[Hay que] pasear caminando campo a través, para que con el aire libre respirado en abundancia el espíritu se engrandezca y se eleve.");
    this.listaTitulos.push("Nada es honesto cuando se ejecuta a disgusto o por coacción. Toda acción honesta es voluntaria.");
    this.listaTitulos.push("Recibir sin orgullo, desprenderse sin apego.");
    this.listaTitulos.push("Frecuentemente, se peca contra justicia por omisión, y no solo por acción.");
    this.listaTitulos.push("Quien practica la filosofía como antídoto de su espíritu, resulta magnánimo, lleno de confianza, invencible y más elevado cuando uno se le acerca.");
    this.listaTitulos.push("Allí donde se puede vivir, es posible también vivir bien. Es posible vivir en la corte; pues también en la corte se vive bien.");
    this.listaTitulos.push("Has sufrido innumerables penas por no haberte limitado a seguir los consejos de tu razón.");
    this.listaTitulos.push("Encadenarás mi pierna, pero mi albedrío ni el propio Zeus puede vencerlo.");
    this.listaTitulos.push("El descanso sin estudio es para los vivos muerte y sepultura.");
    this.listaTitulos.push("Lo que no es útil a la colmena, no lo es tampoco para la abeja.");
    this.listaTitulos.push("Es mejor tropezar con los pies y caer, que no con la boca.");
    this.listaTitulos.push("El que peca, peca contra sí mismo; el que comete una injusticia se perjudica también a sí mismo, puesto que se convierte en un malvado");
    this.listaTitulos.push("El mejor procedimiento para vengarse de los malos es procurar no asemejarse a ellos.");
    this.listaTitulos.push("Nada hay más odioso que la amistad del lobo. Evita este vicio más que los demás.");
    this.listaTitulos.push("No trates de que las cosas ocurran como tú quieres; quiere, más bien, que las cosas que ocurren sean como son, y la vida transcurrirá con tranquilidad");
    this.listaTitulos.push("El mundo es una mutación continua: la vida, una imaginación.");
    this.listaTitulos.push("Si te afliges por alguna causa externa, no es ella lo que te importuna, sino el juicio que tú haces de ella. Y borrar este juicio, de ti depende");
    this.listaTitulos.push("Que nadie te oiga quejarte de la vida que se lleva en la corte; ni te oigas tú quejarte a ti mismo.");
    this.listaTitulos.push("No te asocies a los lamentos de los afligidos, ni a sus conmociones.");
    this.listaTitulos.push("Tranquilo a la vez que resuelto, alegre a la par que consistente, es el hombre que en todo sigue la razón.");
    this.listaTitulos.push("Obra, habla y piensa siempre como si estuvieras a punto de salir de esta vida.");
    this.listaTitulos.push("Es mejor vencer [a la angustia] que engañarla.");
    this.listaTitulos.push("Que nadie me robe ningún día, pues no me va a devolver nada que merezca tanto gasto.");
    this.listaTitulos.push("Es vergonzoso que cuando tu cuerpo no renuncia a esta vida, renuncie la primera tu alma.");
    this.listaTitulos.push("Todo es efímero: el recuerdo y el objeto recordado");
    this.listaTitulos.push("Quita fuerzas y peso a la desgracia, aquel que lleva con calma su infortunio.");

    this.reflexion = this.listaTitulos[this.getRandomInt(0, this.listaTitulos.length)];
  }

  private getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min)) + min;
  }

}
