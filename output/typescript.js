"use strict";
let numeros;
numeros = 23;
let numeros_2 = 56;
let strings;
strings = "hola soy un string";
let string_2 = "soy otro string implicito";
class personas {
    constructor(nombre, apellido, nacimiento) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.nacimiento = nacimiento;
    }
    edad(año_actual) {
        let edad = año_actual - this.nacimiento;
        return edad;
    }
}
let persona_1 = new personas("juan", "lopez", 1820);
console.log(persona_1.edad(2022));
