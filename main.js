// ejercicio 1

 let numero = Number(prompt("ingrese un numero entre 1 y 100"));
 if (numero >= 1 && numero <= 100){
  for(let i = numero; i >=1; i--){
    console.log(i)
  }
 }else{
    console.log("numero ingresado no corresponde")
 }

//  // ejercicio 2

 let multiplo = Number(prompt("ingrese un numero entre 1 y 10"));
if (multiplo >= 1 && multiplo <=10){
    console.log
      (  `tabla de multiplicar del ${multiplo}`)

    for(let i = 1; i <=10; i++){
        let resultado = multiplo * i
        console.log(`${multiplo} X ${i} = ${resultado}`)
    }
}else{
    console.log("numero ingresado no permitido") 
}


// ejercicio 3

function programa (){
  let suma = 0
  let numero = parseInt(prompt("ingrese los numeros"))
  while(numero !== 0 ) {
   suma = suma + numero
   numero = parseInt(prompt("Ingrese otro número o 0 para terminar"));
   console.log("La suma de los números ingresados es: " + suma);
  }
}
programa()


// ejercicio 4

function programa (){
     let suma = 0
    let numero = parseInt(prompt("ingrese los numeros"))

do {
  suma = suma + numero
   numero = parseInt(prompt("Ingrese otro número o 0 para terminar"));
  console.log("La suma de los números ingresados es: " + suma);
} while (numero !== 0);
}
programa()


// ejercicio 5


function comparar(){
  let  contador = 0
  while (numero !== suma) {
   let numero = parseInt(prompt("ingrese los numeros"))
   contador ++
   if (numero > suma){
     alert("el numero para adivinar es menor")
   }else if (numero < suma){
     alert("el numero para adivinar es mayor")
   }else {
     alert(`felicitaciones adivinaste el numero en la cantidad de intentos ${contador}`)
   }
  }
 }
 comparar()


// ejercicio 6

function recibirNumero(){

    let numero = parseInt(prompt("ingrese su numero"))
    for (let i = numero; i > 0; i--){
        if  (numero % i == 0){
           console.log(i) 
        }   
    }

    }
    recibirNumero()




//  ejercicio 7


colores =[ "amarillo","azul","rojo"];

function recorre(color){
  for (let ver of color) {
    console.log(ver)
  }
}
recorre(colores)



// ejercicio 8


let numeros = [1,2,3,4,5]

function recorrer(numero){
  for (let elemento of numero) {
    console.log(`el numero es ${elemento} y su doble es ${elemento * 2}`)
  }
}
recorrer(numeros);



// ejercicio 9


let familia =[
  {
    nombre: "maria",
    apellido: "martinez",
    edad: 45,
    identificacion: 56879797,
  },

  {
    nombre: "luisa",
    apellido: "perez",
    edad: 30,
    identificacion: 98877,
  },

  {
    nombre: "diego",
    apellido: "ruiz",
    edad: 85,
    identificacion: 9867657,
  },

  {
    nombre: "carlos",
    apellido: "jimenez",
    edad: 56,
    identificacion: 64543434,
  }
  ]

  function familiar(informacion){
    for (let objetos of informacion) {
      console.log(`Hola soy ${objetos.nombre} y tengo ${objetos.edad} años `)
    }
  }
  familiar(familia)



// ejercicio 10


let persona = {
  nombre : "jennys",
  apellido : "Guzman",
 ciudad : "Cartagena",
 edad : 36,
 estatura : 1.57,
 }

 function objec (persona) {
 for (let datos in persona) {
    console.log(datos);      
     }
 }
 objec(persona);



//  ejercicio 11

function mostrar (objec){
  for (let informacion in objec){
    console.log(` soy ${objec.nombre} ${objec.apellido} ${objec.ciudad} ${objec.edad} ${objec.estatura}`);
  }
}
mostrar(persona);

// ejercicio 12


    function numeros() {
          let pares = 0;
          let impares = 0;
          while (true) {
            let numero = Number(prompt("ingrese un numero"));
            if (numero === 0) {
              alert("Fin del programa");
              break;
            } else {
              if (isNaN(numero)) {
                alert("ingresa un numero valido");
                break;
              } else if (numero % 2 === 0) {
                pares += numero;
              } else {
                impares += numero;
              }
            }
          }
          console.log(pares, impares);
        }
        
        numeros();



    // ejercicio 13

    let numeros = [2, 3, 4, 6, 89, 56, 65, 43, 65, 190];

function encontrarMayor(array) {
  let mayor = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > mayor) {
      mayor = array[i];
    }
  }
  return mayor;
}
console.log(encontrarMayor(numeros));
    