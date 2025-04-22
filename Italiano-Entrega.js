// 1. Ingresar dos valores y sumarlos.
function sumarDosValores(a, b) {
    return a + b;
} console.log(sumarDosValores(32, 15));

// 2. Ingresar tres valores e indicar cuál es el mayor y cuál el menor.
function mayorYMenor(a, b, c) {
    const valores = [a, b, c];
    return {
        mayor: Math.max(...valores),
        menor: Math.min(...valores)
    }; 
}console.log(mayorYMenor(32, 15, 25));

// 3. Ingresar una palabra y mostrar: <PALABRA> tiene <n> letras.
function contarLetras(palabra) {
    return `${palabra} tiene ${palabra.length} letras.`;
} console.log(contarLetras("JavaScript"));

// 4. Ingresar un número e indicar si es par.
function esPar(numero) {
    return numero % 2 === 0 ? "En efecto, es par" : "Na ke ver, no es par";
} console.log(esPar(7));

// 5. Ingresar una palabra y un número "n". Repetir la palabra "n" veces.
function repetirPalabra(palabra, n) {
    return  `${palabra} `.repeat(n);
}console.log(repetirPalabra("Hola", 10));

// 6. Ingresar dos valores enteros y enumerar los elementos que los separan.
function enumerarElementos(a, b) {
    const inicio = Math.min(a, b) + 1;
    const fin = Math.max(a, b);
    return Array.from({ length: fin - inicio }, (_, i) => inicio + i);
} console.log(enumerarElementos(2, 15));

// 7. Ingresar dos números y mostrar los múltiplos de 3 comprendidos entre ambos.
function multiplosDeTres(a, b) {
    const inicio = Math.min(a, b);
    const fin = Math.max(a, b);
    return Array.from({ length: fin - inicio + 1 }, (_, i) => inicio + i).filter(num => num % 3 === 0);
} console.log(multiplosDeTres(2, 32));

// 8. Mostrar los múltiplos de 2 y 3 menores a 100.
function multiplosDeDosYTres() {
    return Array.from({ length: 100 }, (_, i) => i).filter(num => num % 2 === 0 && num % 3 === 0);
} console.log(multiplosDeDosYTres());

// 9. Obtener la suma de los elementos de un array.
function sumarArray(array) {
    return array.reduce((acc, num) => acc + num, 0);
} console.log(sumarArray([3, 7, 40, 9, 11]));

// 10. Sumar solo los elementos pares de un array.
function sumarPares(array) {
    return array.filter(num => num % 2 === 0).reduce((acc, num) => acc + num, 0);
} console.log(sumarPares([3, 7, 40, 10, 10]));

// 11. Ingresar una palabra e identificar las letras distintas y sus repeticiones.
function contarLetrasDistintas(palabra) {
    const conteo = {};
    for (const letra of palabra) {
        conteo[letra] = (conteo[letra] || 0) + 1;
    }
    return conteo;
} console.log(contarLetrasDistintas("onomatopeya"));

// 12. Crear un objeto literal con las siguientes propiedades: nombre, sexo biológico y edad.
let personas = [nombre = "pepe", sexo = "M", edad = "25"]
console.log(personas);

// 13. Obtener el promedio de edad, el nombre de la mujer con mayor edad, el nombre del hombre con menor edad, el promedio de edad de las mujeres.
function analizarPersonas(personas) {
    const mujeres = personas.filter(p => p.sexo === "F");
    const hombres = personas.filter(p => p.sexo === "M");

    const promedioEdad = personas.reduce((acc, p) => acc + p.edad, 0) / personas.length;
    const mujerMayor = mujeres.reduce((mayor, p) => (p.edad > mayor.edad ? p : mayor), mujeres[0]);
    const hombreMenor = hombres.reduce((menor, p) => (p.edad < menor.edad ? p : menor), hombres[0]);
    const promedioEdadMujeres = mujeres.reduce((acc, p) => acc + p.edad, 0) / mujeres.length;

    return {
        promedioEdad,
        mujerMayor: mujerMayor?.nombre || "No hay mujeres",
        hombreMenor: hombreMenor?.nombre || "No hay hombres",
        promedioEdadMujeres
    };
} console.log(analizarPersonas([
    { nombre: "Ana", sexo: "F", edad: 25 },
    { nombre: "Luis", sexo: "M", edad: 30 },
    { nombre: "María", sexo: "F", edad: 28 },
    { nombre: "Pedro", sexo: "M", edad: 22 }
]));

// 14. Filtrar los elementos de un array de números para obtener solo los pares.
function filtrarPares(array) {
    return array.filter(num => num % 2 === 0);
} console.log(filtrarPares([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// 15. Crear una función que reciba 3 parámetros: mínimo, máximo y divisor. Devolver una lista con los divisores del número ingresado.
function obtenerDivisores(minimo, maximo, divisor) {
    return Array.from({ length: maximo - minimo + 1 }, (_, i) => minimo + i).filter(num => num % divisor === 0);
} console.log(obtenerDivisores(1, 100, 5));