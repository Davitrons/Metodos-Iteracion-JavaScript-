//🔢 1. Duplicar y Filtrar Números Pares
console.log("🔢 1. Duplicar y Filtrar Números Pares");
const numbers = [3, 7, 12, 5, 9, 20, 15];

const dobleNumeros = numbers.map((num) => num * 2);
console.log(`Números duplicados: ${dobleNumeros}`);

const filtraNumeros = dobleNumeros.filter((num) => num > 20 && num % 2 === 0);
console.log(`Números pares mayores que 20: ${filtraNumeros}`);
console.log("");

console.log("📊 2. Ordenar y Eliminar Elementos");
//📊 2. Ordenar y Eliminar Elementos

const scores = [56, 89, 72, 45, 99, 38, 65];

const ordenado = scores.sort().reverse();
console.log(`Array ordenado de mayor a menor: ${ordenado}`);

ordenado.pop(); // Elimina el último (menor después de ordenar)
ordenado.shift(); // Elimina el primero (mayor después de ordenar)

console.log(
  "Array después de eliminar el puntaje más alto y el más bajo:",
  ordenado
);
console.log("");

console.log("🍎 3. Añadir y Eliminar Elementos de un Array");
//🍎 3. Añadir y Eliminar Elementos de un Array

const fruits = ["apple", "banana", "cherry"];
fruits.push("grape");
fruits.unshift("mango");

console.log("Añadiendo al princicio y al final del array:", fruits);

fruits.shift();
fruits.pop();

console.log("Eliminando al princicio y al final del array:", fruits);

console.log("");

console.log("🔄 4. Invertir y Unir Nombres");
//🔄 4. Invertir y Unir Nombres

const names = ["Alice", "Bob", "Charlie", "David"];

console.log("Utilizando el reverse():", names.reverse());
console.log("Utilizando el join()", names.join("-"));

console.log("");

console.log("🔍 5. Encontrar la Primera Palabra Larga");
//🔍 5. Encontrar la Primera Palabra Larga

const words = ["cat", "elephant", "dog", "giraffe", "lion"];

console.log(words);
const palabraLarga = words.find((word) => word.length > 5);

console.log("Primera palabra con más de 5 letras:", palabraLarga);

console.log("");

console.log("✅ 6. Comprobar Inclusión de Elementos");
//✅ 6. Comprobar Inclusión de Elementos

const colors = ["red", "blue", "green", "yellow"];

console.log(colors);
console.log("¿El array incluye 'green'?", colors.includes("green"));
console.log("¿El array incluye 'purple'?", colors.includes("purple"));

console.log("");

console.log("📏 7. Filtrar Números Primos");
//📏 7. Filtrar Números Primos

const numbers1 = [2, 4, 5, 6, 7, 8, 9, 11, 13];
console.log(numbers1);

function primo(numero) {
  for (var i = 2; i < numero; i++) {
    if (numero % i === 0) {
      return false;
    }
  }

  return numero !== 1;
}

const primos = numbers1.filter(primo);
console.log("Array con solo los numeros primos", primos);

console.log("");

console.log("🔤 8. Convertir Números a Cadenas");
//🔤 8. Convertir Números a Cadenas

const nums = [10, 20, 30, 40, 50];
console.log("Array inicial:", nums);

const cadenaNumeros = nums.map((num) => num.toString());
console.log("Array con cadenas de texto", cadenaNumeros);

console.log("");

console.log("📝 9. Contar Frases Largas");
//📝 9. Contar Frases Largas

const sentences = [
  "Hello world",
  "JavaScript is fun",
  "I love coding",
  "Keep it simple",
];
console.log("Array de cadenas Largas:", sentences);

const cadenasMasLargas = sentences.filter((cad) => cad.length > 12);
console.log(
  "Cantidad de frases con más de 12 caracteres: " + cadenasMasLargas.length,
  cadenasMasLargas
);

console.log("");

console.log("🔄 10. Invertir y Transformar Números");
//🔄 10. Invertir y Transformar Números

const nums2 = [1, 2, 3, 4, 5];
console.log("Array de numeros", nums2);

const reverseNum = [...nums2].reverse();
console.log("Array invertido:", reverseNum);
console.log(
  "Números multiplicados por su índice:",
  reverseNum.map((num, i) => num * i)
);

console.log("");

console.log("📏 11. Ordenar Nombres por Longitud");
//📏 11. Ordenar Nombres por Longitud

const names1 = ["Tom", "Alexander", "Bob", "GustavoAlfredo"];
console.log("Array de Nombres", names1);

console.log(
  "Nombres ordenados por longitud:",
  names1.sort((a, b) => {
    if (a.length < b.length) {
      return -1; // a viene antes que b
    }
    if (a.length > b.length) {
      return 1; // b viene antes que a
    }
    return 0; // Son iguales en longitud
  })
);

console.log("");

console.log("✅ 12. Manipular Lista de Tareas");
//✅ 12. Manipular Lista de Tareas

const tasks = ["Wash dishes", "Do laundry", "Clean room"];
tasks.push("Buy groceries");
tasks.unshift("Feed the cat");

console.log("Añadiendo al princicio y al final del array:", tasks);

tasks.shift();
tasks.pop();

console.log("Eliminando al princicio y al final del array:", tasks);

console.log("");

console.log("✍️ 13. Filtrar y Unir Palabras");
//✍️ 13. Filtrar y Unir Palabras

const words1 = ["apple", "banana", "avocado", "cherry", "apricot"];
console.log("Array de palabras:", words1);

const palabrasA = words1.filter((palabra) => palabra[0] === "a");
console.log(
  "Palabras que comienzan con 'a' unidas y separadas por comas:",
  palabrasA.join(",")
);

console.log("");

console.log("🥇 14. Encontrar el Segundo Número Más Grande");
//🥇 14. Encontrar el Segundo Número Más Grande

const numbers2 = [45, 67, 12, 89, 34, 22];
console.log(numbers2);

numbers2.sort().pop();
console.log("El segundo número más grande:",numbers2[numbers2.length-1]);

console.log("");

console.log("🔍 15. Verificar Inclusión de Subcadenas en Frases");
//🔍 15. Verificar Inclusión de Subcadenas en Frases

const phrases = ['I love JavaScript', 'Coding is great', 'Java is cool', 'I prefer Python'];

const incluyeJava = phrases.map(frase => frase.includes('Java'));

console.log("Array de resultados que incluyen 'Java':", incluyeJava);
