export class Dupla{
    public dato1: string;
    public dato2: string;

    constructor(){
        this.dato1 = ''; 
        this.dato2 = '';
    }
}

export class CajaBrazos{
    public nombre: string;
    public min: number;
    public q1: number;
    public mediana: number;
    public q3: number;
    public max: number;
    public notas: string;
    public constructor(){
        this.nombre = '';
        this.min = 0;
        this.q1 = 0;
        this.mediana = 0;
        this.q3 = 0;
        this.max = 0;
        this.notas = '';
    }
}