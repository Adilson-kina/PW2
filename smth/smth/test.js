const readline = require("readline");
let rl = readline.createInterface(process.stdin, process.stdout);
let num;
rl.setPrompt("Digite um número");
num = rl.prompt();
rl.close();
console.log(num);
