class PilaEnteros{
    private vec:number[]=[];
    insertar(x:number){
        this.vec.push(x);
    }
    extraer(){
        if(this.vec.length>0){
            return this.vec.pop();
        }else{
            return null;
        }
    }
}
class PilaString{
    private vec:string[]=[];
    insertar(x:string){
        this.vec.push(x);
    }
    extraer(){
        if(this.vec.length>0){
            return this.vec.pop();
        }else{
            return null;
        }
    }
}
let pila1 = new PilaEnteros();
pila1.insertar(20);
pila1.insertar(23);
pila1.insertar(2);
console.log(pila1.extraer());

let pila2 = new PilaString();
pila2.insertar('Juan');
pila2.insertar('Ana');
pila2.insertar('Luis');
console.log(pila2.extraer());

//Clase generica para no tener que hacer lo de antes
class PilaGenerica<T>{ //La letra 'T' es la que permite que como parametro se pueda introducir de diferentes tipos de valores
    private vec:T[]=[];
    insertar(x:T){
        this.vec.push(x);
    }
    extraer(){
        if(this.vec.length>0){
            return this.vec.pop();
        }else{
            return null;
        }
    }
}
//Al momento de definir los objetos, se usa solamente la clase generica, no tienes que generar mas clases
let pila3 = new PilaGenerica<number>; //Aqui se define que tipo de dato se utilizara en la clase
pila3.insertar(20);
pila3.insertar(23);
pila3.insertar(2);
console.log(pila3.extraer());

let pila4 = new PilaGenerica<string>;
pila4.insertar('Juan');
pila4.insertar('Ana');
pila4.insertar('Luis');
console.log(pila4.extraer());