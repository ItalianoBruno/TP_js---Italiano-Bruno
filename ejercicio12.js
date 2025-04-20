// rear un objeto literal con las siguiente propiedades: nombre, sexo biológico y edad. Agregar varios elementos a una lista. Obtener el promedio de edad, el nombre de la mujer con mayor edad, el nombre del hombre con menor edad, el promedio de edad de las mujeres.

let personas = [
  { nombre: "Ana", sexo: "F", edad: 25 },
  { nombre: "Luis", sexo: "M", edad: 30 },
  { nombre: "María", sexo: "F", edad: 35 },
  { nombre: "Carlos", sexo: "M", edad: 20 },
];

let promedioEdad =
  personas.reduce((acc, p) => acc + p.edad, 0) / personas.length;

console.log("Promedio de edad:", Math.round(promedioEdad, 0));

let mujeres = personas.filter((p) => p.sexo === "F");

console.log("mujeres:", mujeres);

let mujerMayor = mujeres.reduce(
  (mayor, p) => (p.edad > mayor.edad ? p : mayor),
  { edad: 0 }
);

console.log("Mujer mayor:", mujerMayor.nombre);

let hombres = personas.filter((p) => p.sexo === "M");
console.log("hombres:", hombres);

let hombreMenor = hombres.reduce(
  (menor, p) => (p.edad < menor.edad ? p : menor),
  { edad: Infinity }
);
console.log("Hombre menor:", hombreMenor.nombre);

let promedioEdadMujeres =
  mujeres.reduce((acc, p) => acc + p.edad, 0) / mujeres.length;

console.log("Promedio de edad de mujeres:", Math.round(promedioEdadMujeres, 0));
