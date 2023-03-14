import { IPieza } from "../../Interfaces/Pieza/IPieza";
import { ICasilla } from "../../Interfaces/Casilla/ICasilla";
import { Pieza } from "../Pieza/Pieza";

export class Casilla implements ICasilla{
    posicion: string;
    pieza: IPieza;
    color: string;
    constructor(posicion: string, color: string, nombrepieza: string, colorpieza: string, jugable: boolean){
        this.posicion = posicion;
        this.color = color;
        this.pieza = new Pieza(nombrepieza, colorpieza, "/assets/img/"+nombrepieza+colorpieza+"2.png", jugable);
    }

}