/*var num = 6
var f = 1
var st = 'x'
while(num > 1){
    num --
    f = (f*num)
    console.log(st, num)
}
console.log(f)
typeof st*/
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite os valores de a, b e c: ', (input) => {
  const [a, b, c] = input.split(' ').map(Number);
  console.log(`Equação: ${a}x^2 + ${b}x + ${c}`);

  const delta = Math.pow(b, 2) - (4 * a * c);

  if (delta >= 0) {
    const x1 = (-b + Math.sqrt(delta)) / (2 * a);
    const x2 = (-b - Math.sqrt(delta)) / (2 * a);
    console.log(`A primeira raiz é: ${x1}\nA segunda raiz é: ${x2}`);
  } else {
    console.log('Não há raízes reais.');
  }

  rl.close();
});