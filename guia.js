// Comentario de una sola línea

/*
Comentario de varias líneas
*/

// Definición de expresiones
// Definicion de variables
let x = 5; // Declaración de una variable con valor 5 (usar esta definicion a menos que sea extrictamente necesario usar var)
var y = 10; // Declaración de una variable con valor 10
const z = 15; // Declaración de una constante con valor 15 (no se puede cambiar su valor después de la declaración)

// Definicion de scope
let a = 1; // Variable
console.log(a); // Imprime 1

x = 5 + 5;
console.log(x); // Imprime 10

x += 5; // Suma 5 a x (x = x + 5)
console.log(x); // Imprime 15

x -= 2; // Resta 2 a x (x = x - 2)
console.log(x); // Imprime 13

let palabra = "Hola"; // Declaración de una variable con valor "Hola"

// Operacion de strings
palabra += " Mundo"; // Concatenación de cadenas (palabra = palabra + " Mundo")
console.log(palabra); // Imprime "Hola Mundo"

let texto = "Puntos:";
let mezcla = texto + z;
console.log(mezcla); // Imprime "Hola Mundo15"

let nombre1 = "Juan tiene " + x + " años"; // Concatenación de cadenas (nombre1 = "Juan tiene " + x + " años")
console.log(nombre1); // Imprime "Juan tiene 13 años"

// template strings
let nombre2 = `Juan tiene ${x} años`;
console.log(nombre2); // Imprime "Juan tiene 13 años"

// Condicionales
let edad = 22; // Declaración de una variable con valor 22
if (edad >= 18) {
  // Si la edad es mayor o igual a 18
  console.log("Eres mayor de edad"); // Imprime "Eres mayor de edad"
} else {
  // Si no
  console.log("Eres menor de edad"); // Imprime "Eres menor de edad"
}

if (edad == 18) {
  // Si la edad es igual a 18
  console.log("Tienes 18 años"); // Imprime "Tienes 18 años"
}

if (edad === 18) {
  // Si la edad es estrictamente igual a 18 (tipo y valor)
  console.log("Tienes 18 años"); // Imprime "Tienes 18 años"
}

if (edad != 18) {
  // Si la edad es diferente a 18
  console.log("No tienes 18 años"); // Imprime "No tienes 18 años"
}

if (edad !== 18) {
  // Si la edad es estrictamente diferente a 18 (tipo y valor)
  console.log("No tienes 18 años"); // Imprime "No tienes 18 años"
}

// bucles
// for
for (var i = 0; i < 5; i++) {
  // i = i + 1
  // Bucle for que se repite 5 veces
  console.log(i); // Imprime el valor de i
}

// while
console.log("Bucle while"); // Imprime "Bucle while"
while (i < 10) {
  // Bucle while que se repite mientras i sea menor que 10
  console.log(i); // Imprime el valor de i
  i++; // Incrementa i en 1
}

for (let d = 0; d <= 5; d++) {
  for (let u = 1; u <= 9; u++) {
    console.log("Numero " + d + u); // Imprime el valor decena sumado al de unidad
  }
}

// funciones
// Definición de una función que suma dos números
// declaracion de la funcion
function suma(a, b) {
  let resultado = a + b; // Suma a y b
  return resultado; // Devuelve el resultado
}

// Ejecucion de la funcion
let res = suma(5, 10); // Llama a la función suma con los argumentos 5 y 10
console.log(res); // Imprime el resultado de la suma (50)

function estaVivo() {
  if (vida > 0) {
    console.log("Estoy vivo"); // Imprime "Estoy vivo"
    return true; // Devuelve verdadero si vida es mayor que 0
  } else {
    console.log("Estoy muerto"); // Imprime "Estoy muerto"
    return false; // Devuelve falso si vida es menor o igual a 0
  }
}

var vida = 1; // Declaración de una variable con valor 1
estaVivo(); // Llama a la función estaVivo
vida -= 1; // Resta 1 a vida
estaVivo(); // Llama a la función estaVivo

// Ejemplos de metodos de arrays: map, filter y reduce

let array = [1, 2, 3, 4, 5]; // Declaración de un array con valores del 1 al 5

array.map((elemento) => {
  // Recorre el array y aplica una función a cada elemento
  console.log(elemento); // Imprime cada elemento del array
}); // Llama a la función map

let array2 = [10, 20, 30, 40, 50]; // Declaración de otro array con valores del 10 al 50

// filtrar numeros menos a 30
let numerosMenos30 = array2.filter((elemento) => {
  // Recorre el array y aplica una función a cada elemento
  return elemento < 30; // Devuelve verdadero si el elemento es menor que 30
});

console.log(numerosMenos30); // Imprime el array filtrado (10, 20)
let array4 = [10, 20, 30, 40, 50];

// filtrar numeros mayores a 100
let numerosMayores100 = array4.filter((elemento) => {
  // Recorre el array y aplica una función a cada elemento
  return elemento > 100; // Devuelve verdadero si el elemento es menor que 30
});

console.log(numerosMayores100); // Imprime el array filtrado (10, 20)

let array3 = [1, 2, 3, 4, 5]; // Declaración de otro array con valores del 1 al 5
// usa reduce para sumar los elementos del array

let sumaTotal = array3.reduce((acumulador, elemento) => {
  // Recorre el array y aplica una función a cada elemento
  return acumulador + elemento; // Devuelve la suma del acumulador y el elemento
}, 0); // Inicializa el acumulador en 0

console.log(sumaTotal); // Imprime la suma total (15)

// array de nombres de armas de cs2 y recorrer con reduce

let armas = [
  "AK-47",
  "M4A4",
  "AWP",
  "Desert Eagle",
  "Glock-18",
  "FAMAS",
  "MP5-SD",
  "UMP-45",
  "P90",
  "Nova",
];

// usa reduce para concatenar los nombres de las armas

let armasConcatenadas = armas.reduce((acumulador, elemento) => {
  if (acumulador !== "") {
    // Si el acumulador no está vacío, agrega una coma antes del elemento
    acumulador += ", "; // Devuelve la concatenación del acumulador y el elemento
  }
  // Recorre el array y aplica una función a cada elemento
  return acumulador + elemento; // Devuelve la concatenación del acumulador y el elemento
}, ""); // Inicializa el acumulador en ""

console.log(armasConcatenadas); // Imprime la concatenación de los nombres de las armas
