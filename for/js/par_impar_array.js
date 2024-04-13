/**
 *
 * Autor: RA:1124736840 Nome:Adilson
 * Data: 10/04/2024
 *
**/

// Novo array com 10 indices
arr = new Array(10);

// Declaração de arrays pares e impares 
let par = [];
let impar = [];

// Declaração das variaveis com os futuros valores da soma de pares e impares  
let parSoma = 0, imparSoma = 0;

// Loop para conseguir os valores dos indices do array 
for (let i = 0; i < arr.length; i++) {
  arr[i] = parseInt(prompt(`Digite o ${i + 1}° número do array`));
}

// Adiciona os pares ao vetor par e impares ao vetor impar
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 0) {
    par.push(arr[i]);
  }
  else if (arr[i] % 2 == 1) {
    impar.push(arr[i]);
  }
}

// Faz a soma dos numeros nos arrays par e impar
for (let i = 0; i < par.length; i++) {
  parSoma += par[i];
}
for (let i = 0; i < impar.length; i++) {
  imparSoma += impar[i];
}

// Comparação de soma
if (parSoma > imparSoma) {
  console.log(`A soma dos pares é maior, com ${parSoma}, e os impares com ${imparSoma}`)
}
else {
  console.log(`A soma dos impares é maior, com ${imparSoma}, e os pares com ${parSoma}`)
}
