import { IPieza } from "../../Interfaces/Pieza/IPieza";

export class Pieza implements IPieza{
    nom: string;
    color: string;
    imagen: string;
    jugable: boolean;
    constructor(nom: string, color: string, imagen: string, jugable: boolean){
        this.nom = nom;
        this.color = color;
        this.imagen = imagen;
        this.jugable = jugable;
    }
}