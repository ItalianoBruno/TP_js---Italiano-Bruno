// Ejercicios de práctica en JavaScript

// 1. Ingresar dos valores y sumarlos.
function sumarValores(a, b) {
  return a + b;
}

//let resultado = sumarValores(5, 10); // Ejemplo de uso
//console.log(`La suma es: ${resultado}`); // La suma es: 15 - Template string

// 2. Ingresar tres valores e indicar cuál es el mayor y cuál el menor.
function mayorYMenor(a, b, c) {
  const mayor = Math.max(a, b, c);
  const menor = Math.min(a, b, c);
  return { mayor, menor };
}

/*
let resultado = mayorYMenor(5, 10, 3); // Ejemplo de uso
console.log(`El mayor es: ${resultado.mayor}`); // El mayor es: 10
console.log(`El menor es: ${resultado.menor}`); // El menor es: 3
*/

// 3. Ingresar una palabra y mostrar: <PALABRA> tiene <n> letras.
function contarLetras(palabra) {
  return `${palabra} tiene ${palabra.length} letras.`;
}

/*
let resultado = contarLetras("JavaScript"); // Ejemplo de uso
console.log(resultado); // JavaScript tiene 10 letras.
*/

// 4. Ingresar un número e indicar si es par.
function esPar(numero) {
  return numero % 2 === 0 ? "Es par" : "No es par"; // Ternario: evalua la condicion y si es positiva devuelve el primer valor, si no devuelve el segundo.

  /*
    Sin operador ternario:
    if (numero % 2 === 0) {
      return "Es par";
    } else {
      return "No es par";
    } 
  */
}

/*
let resultado = esPar(4); // Ejemplo de uso
console.log(resultado); // Es par
*/

// 5. Ingresar una palabra y un número "n". Repetir la palabra "n" veces.
function repetirPalabra(palabra, n) {
  return palabra.repeat(n);

  /*
    Resolver con for
    let resultado = "";
    for (let i = 0; i < n; i++) {
      resultado += palabra;
    }
    return resultado;
  */
}

/*
let resultado = repetirPalabra("Hola ", 3); // Ejemplo de uso
console.log(resultado); // HolaHolaHola
*/

// 6. Ingresar dos valores enteros y enumerar los elementos que los separan.
function enumerarElementos(a, b) {
  const inicio = Math.min(a, b) + 1;
  const fin = Math.max(a, b);
  const elementos = [];
  for (let i = inicio; i < fin; i++) {
    elementos.push(i);
  }
  return elementos;
}

/*
let resultado = enumerarElementos(25, 10); // Ejemplo de uso
console.log(resultado); // [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
*/

// 7. Ingresar dos números y mostrar los múltiplos de 3 comprendidos entre ambos.
function multiplosDeTres(a, b) {
  let inicio = Math.min(a, b) + 1;
  const fin = Math.max(a, b);
  const multiplos = [];
  if (inicio % 3 !== 0) {
    while (inicio % 3 !== 0) {
      inicio++;
    }
  }
  for (let i = inicio; i < fin; i += 3) {
    multiplos.push(i);
  }
  return multiplos;
}

/*
let resultado = multiplosDeTres(10, 25); // Ejemplo de uso
console.log(resultado); // [12, 15, 18, 21, 24]
*/

// 8. Mostrar los múltiplos de 2 y 5 menores a 100.
function multiplosDeDosYCinco() {
  const multiplos = [];
  for (let i = 1; i < 100; i++) {
    if (i % 2 === 0 && i % 5 === 0) multiplos.push(i);
  }
  return multiplos;
}

/*
let resultado = multiplosDeDosYCinco(); // Ejemplo de uso
console.log(resultado); // [10, 20, 30, 40, 50, 60, 70, 80, 90]
*/

// 9. Obtener la suma de los elementos de un array.
function sumaArray(array) {
  return array.reduce((acc, num) => acc + num, 0);
}

// 10. Sumar solo los elementos pares de un array.
function sumaParesArray(array) {
  return array
    .filter((num) => num % 2 === 0)
    .reduce((acc, num) => acc + num, 0);
}

// 11. Ingresar una palabra e identificar las letras distintas y sus repeticiones.
function contarLetrasDistintas(palabra) {
  const conteo = {};
  for (const letra of palabra) {
    conteo[letra] = (conteo[letra] || 0) + 1;
  }
  return conteo;
}

// 12. Crear un objeto literal con propiedades y realizar operaciones.
function crearListaPersonas() {
  const personas = [
    { nombre: "Ana", sexo: "F", edad: 25 },
    { nombre: "Luis", sexo: "M", edad: 30 },
    { nombre: "María", sexo: "F", edad: 35 },
    { nombre: "Carlos", sexo: "M", edad: 20 },
  ];

  const promedioEdad =
    personas.reduce((acc, p) => acc + p.edad, 0) / personas.length;

  const mujerMayor = personas
    .filter((p) => p.sexo === "F")
    .reduce((mayor, p) => (p.edad > mayor.edad ? p : mayor), { edad: 0 });

  const hombreMenor = personas
    .filter((p) => p.sexo === "M")
    .reduce((menor, p) => (p.edad < menor.edad ? p : menor), {
      edad: Infinity,
    });

  const promedioEdadMujeres = personas
    .filter((p) => p.sexo === "F")
    .reduce((acc, p, _, arr) => acc + p.edad / arr.length, 0);

  return { promedioEdad, mujerMayor, hombreMenor, promedioEdadMujeres };
}

// 13. Generar una función para cada requerimiento del ejercicio anterior.
function obtenerPromedioEdad(personas) {
  return personas.reduce((acc, p) => acc + p.edad, 0) / personas.length;
}

function obtenerMujerMayor(personas) {
  return personas
    .filter((p) => p.sexo === "F")
    .reduce((mayor, p) => (p.edad > mayor.edad ? p : mayor), { edad: 0 });
}

function obtenerHombreMenor(personas) {
  return personas
    .filter((p) => p.sexo === "M")
    .reduce((menor, p) => (p.edad < menor.edad ? p : menor), {
      edad: Infinity,
    });
}

function obtenerPromedioEdadMujeres(personas) {
  return personas
    .filter((p) => p.sexo === "F")
    .reduce((acc, p, _, arr) => acc + p.edad / arr.length, 0);
}

// 14. Crear una función que reciba 3 parámetros: mínimo, máximo y divisor.
function obtenerDivisores(minimo, maximo, divisor) {
  const divisores = [];
  for (let i = minimo; i <= maximo; i++) {
    if (i % divisor === 0) divisores.push(i);
  }
  return divisores;
}

// Obtener la suma de los elementos de un array.
function sumaArray(array) {
  return array.reduce((acc, num) => acc + num, 0);
}

// Ejemplo de uso

const listaDeNumero = [1, 2, 3, 4, 5]; // Array de ejemplo
let resultado = sumaArray(listaDeNumero); // Ejemplo de uso
console.log(resultado); // 15

// Sumar solo los elementos pares de un array.
function sumaParesArray(array) {
  return array
    .filter((num) => num % 2 === 0)
    .reduce((acc, num) => acc + num, 0);

  /* 
    let filtro = array.filter((num) => num % 2 === 0); // Filtra los números pares
    let suma = 0;
    for (let i = 0; i < filtro.length; i++) {
      suma += filtro[i]; // Suma los números pares
    }
    return suma; // Devuelve la suma de los números pares
    

    let sumaConReduce = filtro.reduce((acc, num) => acc + num, 0); // Suma los números pares usando reduce
    return sumaConReduce; // Devuelve la suma de los números pares
    */
}

// Ejemplo de uso
const listaDeNumerosPares = [1, 2, 3, 4, 5]; // Array de ejemplo
let resultadoPares = sumaParesArray(listaDeNumerosPares); // Ejemplo de uso
console.log(resultadoPares); // 6 (2 + 4)

let jugador1 = {
  nombre: "Juan",
  edad: 25,
  posicion: "delantero",
  goles: 10,
};

let jugador2 = {
  nombre: "Pedro",
  edad: 30,
  posicion: "defensor",
  goles: 5,
};

let jugador3 = {
  nombre: "Maria",
  edad: 28,
  posicion: "mediocampista",
  goles: 8,
};

let jugador4 = {
  nombre: "Pepe",
  edad: 25,
  posicion: "delantero",
  goles: 10,
};

let jugadores = [
  jugador1,
  jugador2,
  jugador3,
  jugador4,
  {
    nombre: "Luis",
    edad: 22,
    posicion: "portero",
    goles: 20,
  },
];

let jugadoresConMasDe10Goles = jugadores.filter(
  (jugador) => jugador.goles > 10
); // Filtra los jugadores con más de 10 goles
console.log(jugadoresConMasDe10Goles); // Muestra los jugadores con más de 10 goles

let nombreJugadores = jugadoresConMasDe10Goles.map((jugador) => ({
  nombre: jugador.nombre,
  goles: jugador.goles,
})); // Muestra los nombres de los jugadores con más de 10 goles
console.log(nombreJugadores); // Muestra los nombres de los jugadores con más de 10 goles

// Ingresar una palabra e identificar la letras distintas y sus repeticiones. Por ejemplo: PALA (P = 1, A = 2, L = 1).

function contarLetrasDistintas(palabra) {
  const conteo = {};
  for (const letra of palabra) {
    //conteo[letra] = (conteo[letra] || 0) + 1;
    if (conteo[letra]) {
      conteo[letra]++;
    } else {
      conteo[letra] = 1;
    }
  }
  return conteo;
}

contarLetrasDistintas("PALA"); // Ejemplo de uso

console.log(contarLetrasDistintas("PALA")); // { P: 1, A: 2, L: 1 } - Muestra el conteo de letras distintas y sus repeticiones
