let divisores = [];
num = 120;
for (let i = 0; i <= num; i++){
  if (num % i == 0){
    divisores.push(i);
  }
}
for (let i3 = 0; i3 < divisores.length; i3++){
  console.log(divisores[i3]);
}