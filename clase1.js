// // funcioines 

// const array =  [1,2,3,4,5]
// array[0]= 10;
// array[4]= 10;
// console.log(array);

// function miFuncion(){
//     return 'mi funcion'
// }


// console.log(miFuncion());

//  let sumar  = (a,b) =>   a + b
//  let sumas = sumar(1,2);
//  console.log(sumas);

//  // scope

//  const x = 'declarada en el scope global'
//  function example(){
//     console.log(x);
//  }
//  example()
//  console.log(x)

// // ejemplo funciones

//  function mostrarLista(lista){
//     if(lista.length === 0){
//         console.log('lista vacia')
//     }else{
//         lista.map(element => console.log(element) ) &&  console.log(` la longitud del arreglo es: ${lista.length}`);
        
//     }
 
//  }
//  const lista = [1,2,10];
//  mostrarLista(lista)

// class Persona{
//     constructor(nombre){
//         this.nombre = nombre;
//     }
//     static especie = 'humana';

//     saluadar = () =>{
//       console.log(`! Hola soy  ${this.nombre}, mucho gusto!`);
//     }
//     getEspecie = () => {
//         console.log(`aunque no lo creas soy un ${Persona.especie}`)
//     }
// }
// let persona1 = new Persona('Jorge');
// let persona2 = new Persona('Catalina');
// persona1.saluadar();
// persona2.saluadar();
// persona1.getEspecie()
// persona2.getEspecie()

// class Contador{
//      static totalCount = 1;

//     constructor(name){
//         this.name = name;
//         this.count = 0;
//     }

//     ObtenerResponsable(){
//          return this.name;
//     }

//     obtenerCuentaIndividual(){
//        return this.count;
//     }

//     obtenerCuentaGlobal(){
//       return Contador.totalCount;
//     }
    
//     contar(){
//         this.count++;
//         Contador.totalCount++;
//     }

    
// }
//  let persona1 = new Contador('juan')

// console.log(persona1.ObtenerResponsable());
// console.log(`cuenta individual`, persona1.obtenerCuentaIndividual());
// persona1.contar()
// console.log(`cuenta individual`, persona1.obtenerCuentaIndividual());
// persona1.contar()
// console.log(`cuenta individual`, persona1.obtenerCuentaIndividual());
// persona1.contar();
// console.log(`cuenta individual`, persona1.obtenerCuentaIndividual());
// console.log(`obtner cuenta global`, persona1.obtenerCuentaGlobal())
// persona1.contar();

const lista = [1,3,4];

const mostrarLista = (lista)=>{
    if(lista.length === 0){
        console.log('lista se encuentra vacia')
    }else{
        for(let i = 0; i< lista.length; i++){
            console.log( `elemento ${[i]}: ${lista[i]} `);
            
        }
    }

}

(function(){

    mostrarLista([1,2,3,4,5,6,]);
})()