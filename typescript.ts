let numeros:number;
numeros=23;
let numeros_2=56;
let strings:string;
strings="hola soy un string";
let string_2="soy otro string implicito";

class personas {
    private nombre:string;
    private apellido:string;
    private nacimiento:number;
    constructor  (nombre:string, apellido:string, nacimiento:number){
        this.nombre=nombre;
        this.apellido=apellido;
        this.nacimiento=nacimiento;
    }
public edad(año_actual:number){
    return año_actual-this.nacimiento;
}
}
let persona_1= new personas("juan", "lopez", 1820);
console.log(persona_1.edad);