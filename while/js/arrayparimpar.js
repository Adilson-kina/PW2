/*
*
* Autor: Adilson RA: 1124736840
* Data: 07/05/2024
*
*/
// Separar os numeros pares e impares dentro do vetor
// Somar os Impares e pares
// Comparar qual que é maior

let arr = [1, 3, 4, 12];
// Declaração de arrays pares e impares 
let par = [];
let impar = [];

// Declaração das variaveis com os futuros valores da soma de pares e impares  
let parSoma = 0, imparSoma = 0;
let i = 0;
// Adiciona os pares ao vetor par e impares ao vetor impar
i = 0;
while (i < arr.length) {
  if (arr[i] % 2 == 0) {
    par.push(arr[i]);
  }
  else if (arr[i] % 2 == 1) {
    impar.push(arr[i]);
  }
  i++;
}

// Faz a soma dos numeros nos arrays par e impar
i = 0;
while (i < par.length) {
  parSoma += par[i];
  i++;
}
i = 0;
while (i < impar.length) {
  imparSoma += impar[i];
  i++;
}

// Comparação de soma
if (parSoma > imparSoma) {
  console.log(`A soma dos pares é maior, com ${parSoma}, e os impares com ${imparSoma}`)
}
else if(parSoma < imparSoma){
  console.log(`A soma dos impares é maior, com ${imparSoma}, e os pares com ${parSoma}`)
}
else{
  console.log(`A soma é equivalente com ${parSoma}`)
}
