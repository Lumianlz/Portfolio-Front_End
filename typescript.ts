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
function editar(titulo_input:string,texto_input:string,titulo:string,texto:string):void {
    let input_text:any =document.getElementById(texto_input);
    let input_title:any =document.getElementById(titulo_input)
    let titulo2:any =document.getElementById(titulo);
    let texto2:any =document.getElementById(texto);
        texto2.innerText=input_text.value;
     titulo2.innerText=input_title.value;
    }

    // Clases de section para edicion de area.--------------------------------------------
    class sections{

    }
    class items {
        private titulo:string =""
        private texto:string=""
        private logo:string=""

        constructor(titulo:string,texto:string,logo:string){
            titulo=titulo;
            texto=texto;
            logo=logo;
        }
       /**
        * eliminar
        */
       public eliminar() {
        
       }
      /**
       * editar
       */
      public editar() {
      }
    }
//    instancias de items---------------------------------------------
 let titulo=document.getElementById("") 