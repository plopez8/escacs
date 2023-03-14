import { ITablero } from "../../Interfaces/Tablero/ITablero";
import { Casilla } from "../Casilla/Casilla";

export class Tablero implements ITablero{
    casillas: Array<Array<Casilla>>;
    constructor(){
        this.casillas = [];
        this.casillas = this.crearTablero();
    }

    private crearTablero(){
        this.casillas.push(new Array<any>());
        this.casillas[0].push(new Casilla("a8", "black", "torre", "black", true));
        this.casillas[0].push(new Casilla("a7", "white", "peon", "black", true));
        this.casillas[0].push(new Casilla("a6", "black", "vacio", "vacio", false));
        this.casillas[0].push(new Casilla("a5", "white", "vacio", "vacio", false));
        this.casillas[0].push(new Casilla("a4", "black", "vacio", "vacio", false));
        this.casillas[0].push(new Casilla("a3", "white", "vacio", "vacio", false));
        this.casillas[0].push(new Casilla("a2", "black", "peon", "white", true));
        this.casillas[0].push(new Casilla("a1", "white", "torre", "white", true));
        
        this.casillas.push(new Array<any>());
        this.casillas[1].push(new Casilla("b8", "white", "caballo", "black", true));
        this.casillas[1].push(new Casilla("b7", "black", "peon", "black", true));
        this.casillas[1].push(new Casilla("b6", "white", "vacio", "vacio", false));
        this.casillas[1].push(new Casilla("b5", "black", "vacio", "vacio", false));
        this.casillas[1].push(new Casilla("b4", "white", "vacio", "vacio", false));
        this.casillas[1].push(new Casilla("b3", "black", "vacio", "vacio", false));
        this.casillas[1].push(new Casilla("b2", "white", "peon", "white", true));
        this.casillas[1].push(new Casilla("b1", "black", "caballo", "white", true));
        
        this.casillas.push(new Array<any>());
        this.casillas[2].push(new Casilla("c8", "black", "alfil", "black", true));
        this.casillas[2].push(new Casilla("c7", "white", "peon", "black", true));
        this.casillas[2].push(new Casilla("c6", "black", "vacio", "vacio", false));
        this.casillas[2].push(new Casilla("c5", "white", "vacio", "vacio", false));
        this.casillas[2].push(new Casilla("c4", "black", "vacio", "vacio", false));
        this.casillas[2].push(new Casilla("c3", "white", "vacio", "vacio", false));
        this.casillas[2].push(new Casilla("c2", "black", "peon", "white", true));
        this.casillas[2].push(new Casilla("c1", "white", "alfil", "white", true));

        this.casillas.push(new Array<any>());
        this.casillas[3].push(new Casilla("d8", "white", "rey", "black", true));
        this.casillas[3].push(new Casilla("d7", "black", "peon", "black", true));
        this.casillas[3].push(new Casilla("d6", "white", "vacio", "vacio", false));
        this.casillas[3].push(new Casilla("d5", "black", "vacio", "vacio", false));
        this.casillas[3].push(new Casilla("d4", "white", "vacio", "vacio", false));
        this.casillas[3].push(new Casilla("d3", "black", "vacio", "vacio", false));
        this.casillas[3].push(new Casilla("d2", "white", "peon", "white", true));
        this.casillas[3].push(new Casilla("d1", "black", "reina", "white", true));

        this.casillas.push(new Array<any>());
        this.casillas[4].push(new Casilla("e8", "black", "reina", "black", true));
        this.casillas[4].push(new Casilla("e7", "white", "peon", "black", true));
        this.casillas[4].push(new Casilla("e6", "black", "vacio", "vacio", false));
        this.casillas[4].push(new Casilla("e5", "white", "vacio", "vacio", false));
        this.casillas[4].push(new Casilla("e4", "black", "vacio", "vacio", false));
        this.casillas[4].push(new Casilla("e3", "white", "vacio", "vacio", false));
        this.casillas[4].push(new Casilla("e2", "black", "peon", "white", true));
        this.casillas[4].push(new Casilla("e1", "white", "rey", "white", true));

        this.casillas.push(new Array<any>());
        this.casillas[5].push(new Casilla("f8", "white", "alfil", "black", true));
        this.casillas[5].push(new Casilla("f7", "black", "peon", "black", true));
        this.casillas[5].push(new Casilla("f6", "white", "vacio", "vacio", false));
        this.casillas[5].push(new Casilla("f5", "black", "vacio", "vacio", false));
        this.casillas[5].push(new Casilla("f4", "white", "vacio", "vacio", false));
        this.casillas[5].push(new Casilla("f3", "black", "vacio", "vacio", false));
        this.casillas[5].push(new Casilla("f2", "white", "peon", "white", true));
        this.casillas[5].push(new Casilla("f1", "black", "alfil", "white", true));

        this.casillas.push(new Array<any>());
        this.casillas[6].push(new Casilla("g8", "black", "caballo", "black", true));
        this.casillas[6].push(new Casilla("g7", "white", "peon", "black", true));
        this.casillas[6].push(new Casilla("g6", "black", "vacio", "vacio", false));
        this.casillas[6].push(new Casilla("g5", "white", "vacio", "vacio", false));
        this.casillas[6].push(new Casilla("g4", "black", "vacio", "vacio", false));
        this.casillas[6].push(new Casilla("g3", "white", "vacio", "vacio", false));
        this.casillas[6].push(new Casilla("g2", "black", "peon", "white", true));
        this.casillas[6].push(new Casilla("g1", "white", "caballo", "white", true));

        this.casillas.push(new Array<any>());
        this.casillas[7].push(new Casilla("h8", "white", "torre", "black", true));
        this.casillas[7].push(new Casilla("h7", "black", "peon", "black", true));
        this.casillas[7].push(new Casilla("h6", "white", "vacio", "vacio", false));
        this.casillas[7].push(new Casilla("h5", "black", "vacio", "vacio", false));
        this.casillas[7].push(new Casilla("h4", "white", "vacio", "vacio", false));
        this.casillas[7].push(new Casilla("h3", "black", "vacio", "vacio", false));
        this.casillas[7].push(new Casilla("h2", "white", "peon", "white", true));
        this.casillas[7].push(new Casilla("h1", "black", "torre", "white", true));

        return this.casillas;
    }
}