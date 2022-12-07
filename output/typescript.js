"use strict";

const { create } = require("hbs");

// let numeros:number;
// numeros=23;
// let numeros_2=56;
// let strings:string;
// strings="hola soy un string";
// let string_2="soy otro string implicito";
// class personas {
//     private nombre:string;
//     private apellido:string;
//     private nacimiento:number;
//     constructor  (nombre:string, apellido:string, nacimiento:number){
//         this.nombre=nombre;
//         this.apellido=apellido;
//         this.nacimiento=nacimiento;
//     }
// public edad(año_actual:number){
//     return año_actual-this.nacimiento;
// }
// }
// let persona_1= new personas("juan", "lopez", 1820);
// console.log(persona_1.edad);
//    modificador de texto ----------------------------------------------------------
function editar(titulo_input, texto_input, titulo, texto,nombre) {
    let input_text = document.getElementById(texto_input);
    let input_title = document.getElementById(titulo_input);
    let titulo2 = document.getElementById(titulo);
    let texto2 = document.getElementById(texto);
    texto2.innerText = input_text.value;
    titulo2.innerText = input_title.value;
    let input = document.getElementById(nombre);
    input.style.setProperty("display", "none");
}

// Clases de section para edicion de area.--------------------------------------------

class items {
    constructor(titulo, texto, logo) {
        this.titulo = "";
        this.texto = "";
        this.logo = "";
        titulo = titulo;
        texto = texto;
        logo = logo;
        
    }
    /**
     * editar
     */
    editar() {
    }
}
//    instancias de items---------------------------------------------
function crear(nombre) {
    let input = document.getElementById(nombre);
    input.style.setProperty("display", "inline-block");
}

function add_section(section){
    let item= document.getElementById(section);
  
    console.log(item);

}
