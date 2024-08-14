import { type IAvenger } from './types.d'

//inferencia
//Typescript infiere el tipo de dato de la variable
const a = 1;
const b = 2;
const c = a + b;
//c tambien es number



//functions
//function saludar(name:string){
//   name.toLocaleUpperCase();
//    console.log(`Hola ' ${name}`);
//}

//saludar('Juan');

/* //function con objetos
function saludar(persona:{name:string, age:number}){
    const {name, age} = persona;
    console.log(`Hola ${name} tienes ${age} años`);
}

saludar({name:'Juan', age: 25});
 */

const sayHiFromFunction = (fn:(name:string) => void) => {
    return fn('Juan');
}

const sayHi= (name:string) => {
    console.log(`Hola ${name}`);
    return name;
}

sayHiFromFunction(sayHi)


/* //arrow functions
const sum = (a:number, b:number): number => {
    return a + b;
}


//otra forma, mejor la primera
const restar: (a:number, b:number) => number = (a, b) => {
    return a - b;
}

//never
function throwError(error:string): never{
    throw new Error(error);
}

 */

 
//inferencia funciones anonimas segun el contexto
const avengers = ['spidey', 'thor', 'ironman']

avengers.forEach(avenger =>{
    console.log(avenger.toUpperCase())
})

/* //objetos
let hero={
    name: 'Steve',
    age: 100,
}

function createHero(name:string, age:number){
    return {
        name,
        age
    }
} */

//createHero('Tony', 50);

//type alias
/* type Hero = {
    name: string,
    age: number
}

let hero:Hero = {
  name: "Steve",
  age: 100,
};

function createHero(name:string, age:number):Hero{
    return {
        name,
        age
    }
}
const thor = createHero('Thor', 1000); */

/* //Optional properties
type HeroId = `${string}-${string}-${string}-${string}-${string}`;
type Hero = {
  readonly id?:HeroId;  
  name: string;
  age: number;
  isActive?: boolean;
};

let hero: Hero = {
  name: "Steve",
  age: 100,
};

function createHero(hero:Hero): Hero {
    const {name, age} = hero;
    return {
    id:crypto.randomUUID(),
    name,
    age,
    isActive: true
  };
}
const thor = createHero({name:"Thor", age:1000});


//template union types
type HexadecimalColor = `#${string}`;
//const color:HexadecimalColor = '000'
const color2:HexadecimalColor = '#000'
 */

/* //union types
type HeroId = `${string}-${string}-${string}-${string}-${string}`;
type HeroPowerScale = 'local' | 'Planet' | 'Galaxy' | 'Universe';


const enableAnimationDuration: boolean | number = 200
type Hero = {
  readonly id?: HeroId;
  name: string;
  age: number;
  isActive?: boolean;
  powerScale?: HeroPowerScale;
};

let hero: Hero = {
  name: "Steve",
  age: 100,
};

function createHero(hero: Hero): Hero {
  const { name, age } = hero;
  return {
    id: crypto.randomUUID(),
    name,
    age,
    isActive: true,
  };
}

const thor = createHero({ name: "Thor", age: 1000 });
thor.powerScale = 'Universe'; */

//intersection types
/* type HeroId = `${string}-${string}-${string}-${string}-${string}`;
type HeroPowerScale = "local" | "Planet" | "Galaxy" | "Universe";
type HeroBasicInfo= {
    name:string,
    age: number
}
const enableAnimationDuration: boolean | number = 200;

type HeroProperties = {
  readonly id?: HeroId;
  isActive?: boolean;
  powerScale?: HeroPowerScale;
};

type Hero = HeroBasicInfo & HeroProperties; 

let hero: Hero = {
  name: "Steve",
  age: 100,
};

function createHero(input: HeroBasicInfo): Hero {
  const { name, age } = input;
  return {
    id: crypto.randomUUID(),
    name,
    age,
    isActive: true,
  };
}

const thor = createHero({ name: "Thor", age: 1000 });
thor.powerScale = "Universe";
 */

//Type Indexing

/* type HeroProperties = {
    isActive: boolean;
    address: {
        planet: string,
        city: string
    }
}

const addressHero: HeroProperties['address'] = {
    planet: 'Earth',
    city: 'New York'
} */

/* //Type from value
const address = {
    planet: 'Earth',
    city: 'New York'
}

type address = typeof address;

const addressYT: address = {
    planet: 'Mars',
    city: 'Google'
} */

/* //Type from function return
function createAddress(){
    return {
        planet: 'Earth',
        city: 'New York'
    }
}

type address = ReturnType<typeof createAddress>; */

/* //Arrays
const languajes: (string | number)[] = []

languajes.push('Javascript');
languajes.push('Java'); 
languajes.push(1);


type HeroId = `${string}-${string}-${string}-${string}-${string}`;
type HeroPowerScale = "local" | "Planet" | "Galaxy" | "Universe";
type HeroBasicInfo= {
    name:string,
    age: number
}

const heros: HeroBasicInfo[] = [] */

//Matrices
type CellValue='O'|'X'|''
//GameBoard es una tupla, siendo un array de 3 arrays de 3 elementos
type GameBoard = [
    [CellValue, CellValue, CellValue],
    [CellValue, CellValue, CellValue],
    [CellValue, CellValue, CellValue]
]

const gameBoard: GameBoard = [
    ['X','O','X'],
    ['X','O','X'],
    ['X','O','X']
]

gameBoard[0][1] = 'X'

//otro ejemplo de tupla

//tupla de 3 elementos de tipo number, no más y no menos
type RGB = [number, number, number]

const color: RGB = [255, 0, 0]

// error: const color2: RGB = [255, 0, 0, 0]

color.push(4) //problema con las tuplas: son mutables, se rompe la estructura sin problemas, quedando [255.0,0,0,4]

//Para solucionar esto, se puede usar readonly
type RGB2 = readonly [number, number, number]
const color2: RGB2 = [255, 0, 0]
//error: color2.push(4) 


//enums

/* //js no existen los enums, se usan los "magic strings"

function mostrarMensaje(tipoError){
    if(tipoError === 'notFound')
        console.log('No se encuentra el recurso')

} */

//para ts lo mejor sería usar enums, hay dos formas

//Ideal cuando estemos haciendo una biblioteca/componente
/* enum ERROR_TYPES{
    NOT_FOUND,
    UNAUTHORIZED,
    FORBIDDEN
}
 */

//Ideal para cualquier otro caso de uso, 
// termina generando menos codigo de javascript
const enum ERROR_TYPES {
  NOT_FOUND,
  UNAUTHORIZED,
  FORBIDDEN,
}



function mostrarMensaje(tipoError){
    if(tipoError === ERROR_TYPES.NOT_FOUND)
        console.log('No se encuentra el recurso')
    if(tipoError === ERROR_TYPES.UNAUTHORIZED)
        console.log('No tienes permisos para acceder')
    if (tipoError === ERROR_TYPES.FORBIDDEN)
        console.log("No tienes permisos para acceder");
}


//Aserciones de tipos
const canvas = document.getElementById('canvas')
//devolvera null si no lo encuentra
//devolvera HTMLElement si lo encuentra (generico)
//Necesitamos HTMLCanvasElement  

//Con este if, Typescript puede inferir que canvas se trata de un HTMLCanvasElement
if(canvas != null && canvas instanceof HTMLCanvasElement){
    const ctx = canvas.getContext("2d");
}
    

//Interfaces
/* interface Heroe {
    id: string,
    name: string,
    age: number,
    saludar: ()=>void
}

const hero:Heroe = {
    id: '1',
    name: 'Steve',
    age: 100,
    saludar(){
        console.log(`Hola soy ${this.name}`);
    }
} */

//interfaces anidadas
interface Producto{
    id:number,
    nombre:string,
    precio:number,
    quantity:number 
}
interface Zapatilla extends Producto{
    talla:number,
    marca:string
}

interface Carrito{
    totalPrice: number,
    productos: (Producto|Zapatilla)[]
}

interface CarritoOps{
    add(product:Producto):void,
    remove(product:Producto):void
    clear():void
}

const carrito: Carrito = {
  totalPrice: 100,
  productos: [
    {
      id: 1,
      nombre: 'Laptop',
      precio: 1000,
      quantity: 1,
      
    },
    {
        id:2,
        nombre:'Zapatillas',
        precio: 100,
        quantity: 1,
        talla: 42,
        marca: 'Nike'
        
    }
  ],
};
 


//Narrowing
/* function mostrarLongitud(objeto:number|string){
    if(typeof objeto === 'string')
        return objeto.length
}

mostrarLongitud('hola') */


/* interface Mario{
    company: 'Nintendo'
    nombre:string,
    saltar:()=>void
}

interface Sonic{
    company: 'Sega'
    nombre:string,
    correr:()=>void
}

type Personaje = Mario | Sonic

function jugar(Personaje:Personaje){
  if(Personaje.company === 'Nintendo'){
      Personaje.saltar()
      return;
  }

    Personaje.correr()
} */


//Type guards
//Supongamos que no tenemos la propiedad company en los objetos

interface Mario{
    nombre:string,
    saltar:()=>void
}

interface Sonic{
    nombre:string,
    correr:()=>void
}

type Personaje = Mario | Sonic


//La siguiente funcion es el type guard
//Determina si personaje es sonic o no
function checkIsSonic(personaje:Personaje): personaje is Sonic{
    return (personaje as Sonic).correr !== undefined;
}


function jugar(Personaje:Personaje){
    if(checkIsSonic(Personaje)){
         Personaje.correr();
        return;
    }

    Personaje.saltar();
    return;
}

//EVITAR TYPEGUARDS LO MAS QUE SE PUEDA PORQUE ES UNA MALA PRACTICA


/* //Tipo NEVER
function fn(x:string | number){
    if(typeof x === 'string'){
        // to do
    }else if(typeof x === 'number'){
        //to do
    }else{
        x //x es never porque no puede ser ni string ni number
    }
} */


//Clase Avengers
class AvengerHero implements IAvenger{
    constructor(name:string, powerScore: number){
        this.name = name;
        this.powerScore = powerScore;
    }
    name: string;
    powerScore: number;
    wonBattles: number;
    age: number;

    get fullName(){
        return `${this.name}, de poder ${this.powerScore}`
    }

    battle(enemy: IAvenger, win:boolean){
        if(win){
            this.wonBattles++;
            this.powerScore += 5;
        }else{
            this.powerScore -= 5;
        }
    }

    set power(newPower:number){
        if(newPower <= 100){
            this.powerScore = newPower;
        }else{
            console.log('No puedes tener un poder mayor a 100')
        }
    }
}

const avenger1 = new AvengerHero ('Thor', 100);

