//Declaracion de funciones
function sumar(a:number,b:number):number{
    return a+b;
}
const resultado = sumar(4,6);

console.log(resultado);

function multiplicar(n1:number,n2:number):number{
    let res=n1*n2;
    return res;
}
console.log(multiplicar(4,5));

interface IMascota{
    nombre:string,
    edad:number,
    mostrarEdad:()=>void;
}
function calcular(mascota:IMascota, x:number):void{
    mascota.edad += x;
    console.log(mascota.edad);
}

const nuevaMascota:IMascota={
    nombre:'Miau',
    edad:2,
    mostrarEdad(){
        console.log('La edad es: '+this.edad);
    }
}

calcular(nuevaMascota,3);