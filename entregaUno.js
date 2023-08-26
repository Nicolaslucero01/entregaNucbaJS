// 1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.

const esPar = (numero) => {
  if (numero % 2 === 0) {
    console.log(`El número ${numero} es par.`);
  } else {
    console.log(`El número ${numero} es impar.`);
  }
};

esPar(1);

// 2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.

const esMayor = (numeroUno, numeroDos) => {
  if (numeroUno === numeroDos) {
    console.log("Son iguales");
  } else if (numeroUno > numeroDos) {
    console.log(`El número ${numeroUno} es mayor a ${numeroDos}`);
  } else {
    console.log(`El número ${numeroDos} es mayor a ${numeroUno}`);
  }
};

esMayor(2, 3);

// 3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.

const esDivisible = (numero) => {
  numero % 5 === 0
    ? console.log("Es multiplo de 5")
    : console.log("No es multiplo de 5");
};

esDivisible(5);

// 4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.

const hastaLlegar = (numero) => {
  for (let i = 0; i <= numero; i++) {
    console.log(i);
  }
};

hastaLlegar(4);

// 5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.

const palabraMulti = (palabra, numero) => {
  for (let i = 0; i < numero; i++) {
    console.log(palabra);
  }
};

palabraMulti("Hola", 3);

// 6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.

const imprimirArray = (array) => {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
};

const crearArray = [1, 2, 3, 4, 5, 6, 7, 8];

imprimirArray(crearArray);

// 7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".

const exceptoArray = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (i === 4) {
      continue;
    } else {
      console.log(arr[i]);
    }
  }
};

exceptoArray(crearArray);

// 8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.

const multiplicarArray = (arr, multiplicar) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i] * multiplicar);
  }
};

multiplicarArray(crearArray, 3);
