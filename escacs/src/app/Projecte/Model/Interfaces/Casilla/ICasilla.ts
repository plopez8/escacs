import { IPieza } from "../Pieza/IPieza";

export interface ICasilla{
    posicion: string;
    pieza: IPieza;
    color: string;
}