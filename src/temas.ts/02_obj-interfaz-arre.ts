//Definicion de una interfaz para instanciar un objeto
interface IAlumno{
    matricula?:number; //El signo de interrogacion provoca que la variable no sea obligatoria al crear objs.
    nombre:string;
    edad:number,
    email:string;
}

//Creacion de un objeto
const alumno:IAlumno = {
    
    nombre: 'roberto',
    edad:35,
    email:'ejemplo@gmail.com'
};

console.log(alumno)

//Creacion de arreglos
let mascotas=['Perro','Gato','Perico'];
mascotas[1]='Nuevo gato';
console.log(mascotas);

let tem:(number|string)[]=[];
tem.push(11);
tem.push('Nombre');
console.log(tem);