/**
 *
 * Autor: RA:1124736840 Nome: Adilson
 * Data: 10/04/2024
 *
 **/

// array que futuramente terá os divisores de 120
let divisores = [];

// o numero 120 em si, coloquei em variavel para ser possivel alterar com mais facilidate
let num = 120;

// loop para fazer a comparação de cada numero até 120
for (let i = 0; i <= num; i++){
  // checa se o numero é divisor de 120
  if (num % i == 0){
    //se o numero for divisor de 120 adiciona ao array divisores
    divisores.push(i);
  }
}
//loop para imprimir cada valor do array divisores
for (let i3 = 0; i3 < divisores.length; i3++){
  console.log(divisores[i3]);
}
