//Destructurar objetos y arreglos
interface IReproductor{
    volumen:number;
    segundo:number;
    cancion:string;
    detalles:Detalles;
}
interface Detalles{
    autor:string;
    year:number;
}
const reproductor:IReproductor={
    volumen: 90,
    segundo: 66,
    cancion: "Mañanitas",
    detalles: {
        autor:'Cepillin',
        year:1978
    }
}
/*console.log(`El volumen actual es: ${reproductor.volumen}`);
console.log(`Los segundos son: ${reproductor.segundo}`);
console.log(`La cancion es: ${reproductor.cancion}`);
console.log(`El cantante es: ${reproductor.detalles.autor}`);
console.log(`La edad es: ${reproductor.detalles.year}`);*/

const{volumen,segundo,cancion,detalles}=reproductor;
const{autor}=detalles;

console.log(`${volumen}`);
console.log(`${segundo}`);
console.log(`${cancion}`);
console.log(`${autor}`);

const dbz:string[]=['Goku','Vegeta','Trunks','Yamcha'];
console.log(`Personaje1: ${dbz[0]}`);
console.log(`Personaje2: ${dbz[1]}`);
console.log(`Personaje3: ${dbz[2]}`);
console.log(`Personaje4: ${dbz[3]}`);
const[a,,,d]=dbz;
console.log(`Personaje1: ${a}`);
console.log(`Personaje n: ${d}`);