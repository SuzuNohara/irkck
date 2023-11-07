import { Dupla, CajaBrazos } from "./util";

export class Persona {
    public nombres: string[];
    public apellidos: string[];
    public seudonimos: Dupla[];
    public edad: number;
    public nacimiento: Date;
    public fuerza: CajaBrazos;
    public inteligencia: Intel[];
    public fortaleza: CajaBrazos;
    public destreza: CajaBrazos;
    public mental: CajaBrazos;
    public memoria: CajaBrazos;
    public experiencias: Experiencia[];
    public locaciones: Lugar;
    public supervivencia: CajaBrazos;
    public armas: CajaBrazos[];
    public cuchillos: CajaBrazos[];
    public herramientas: CajaBrazos[];
    public habilidades: Habilidad[];
    constructor(){
        this.nombres= [];
        this.apellidos= [];
        this.seudonimos= [];
        this.edad= 0;
        this.nacimiento= new Date();
        this.fuerza= new CajaBrazos();
        this.inteligencia= [];
        this.fortaleza= new CajaBrazos();
        this.destreza= new CajaBrazos();
        this.mental= new CajaBrazos();
        this.memoria= new CajaBrazos();
        this.experiencias= [];
        this.locaciones= new Lugar();
        this.supervivencia= new CajaBrazos();
        this.armas= [];
        this.cuchillos= [];
        this.herramientas= [];
        this.habilidades= [];
    }
}

export class Experiencia {
    public nombre: String;
    public detalles: String;
    public inicio: Date;
    public final: Date;
    public fechas: Date[];
    public lugares: Lugar[];
    public personas: Persona[];
    public constructor(){
        this.nombre = '';
        this.detalles = '';
        this.inicio = new Date();
        this.final = new Date();
        this.fechas = [];
        this.lugares = [];
        this.personas = [];
    }
}

export class Lugar{
    public nombre: string;
    public planos: string;
    public coords: Coords;
    public notas: string;
    constructor(){
        this.nombre = '';
        this.planos = '';
        this.coords = new Coords();
        this.notas = '';
    }
}

export class Coords{
    public lat: number;
    public lng: number;
    public constructor(){
        this.lat = 0;
        this.lng = 0;
    }
}

export class Habilidad {
    public nombre: string;
    public capacidad: CajaBrazos;
    public notas: string;
    constructor(){
        this.nombre = '';
        this.capacidad = new CajaBrazos();
        this.notas = '';
    }
}

export class Intel{
    public nombre: string;
    public nivel: number;
    public constructor(){
        this.nivel = 0;
        this.nombre = '';
    }
}