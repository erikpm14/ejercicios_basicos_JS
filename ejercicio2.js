//Parte 1
const jedi = {nombre: "Luke Skywalker", edad: 19};

// Tu código para cambiar la edad aquí...

jedi.edad = 30;

console.log(jedi);


//Parte 2

var nombre = "Leia";
var apellido = "Organa";
var edad = 20;

console.log("Soy " + nombre + " " + apellido + ", tengo " + edad + " años y soy una princesa de Alderaan");


//Parte 3

const sable1 = {nombre: "Shoto de Yoda", precio: 1500};
const sable2 = {nombre: "Sable de Darth Vader", precio: 2000};

// Tu código para calcular el precio total aquí...

const precioTotal = sable1.precio + sable2.precio;

console.log("EL precio total es " + precioTotal)

//Parte 4

let precioBaseGlobal = 10000;

// Cambia el precio base en esta linea modificando la variable

precioBaseGlobal = 25000;

const nave1 = {nombre: "Ala-X", precioBase: 50000, precioFinal: 60000};
const nave2 = {nombre: "Halcón Milenario", precioBase: 70000, precioFinal: 80000};

// Tu código para actualizar el precio final de cada nave aquí...

nave1.precioFinal = nave1.precioBase + precioBaseGlobal;
nave2.precioFinal = nave2.precioBase + precioBaseGlobal;

console.log(nave1)
console.log(nave2)





//\Users\Eric\Desktop\ThePower\DESARROLLO_WEB\GITHUB\JAVASCRIPT\ejercicios_basicos_js