/************************************************************************************
    AULA: Introdução ao Javascript

    1. Ambiente de desenvolvimento;
    2. Variáveis var, let, const, string, number e boolean;
    3. Operadores de atribuição, aritméticos, relacionais, lógicos e unários;
    4. Estruturas de decisão if/else, ternárias e switch;
    5. Estruturas de repetição while, do/while, for, for/in e for/of;
    6. Arrays e funções.

    .code runner: ctrl + alt + n  para rodar o código
                  ctrl + alt + m  para interromper a execuação

 ***********************************************************************************/

// Variáveis var, let, const, string, number, boolean,
// operador de atribuição e aritméticos (=, +, -, *, /, %):

var a = 10;
let b = 5;
//const c = 1;
let c = true;
console.log(a, b, c);
console.log(typeof(a), typeof(b), typeof(c));

//a = "Um texto";
//console.log(a, typeof(a));
console.log('A + B: ' + (a + b));
console.log('A - B: ' + (a - b));
console.log('A * B: ' + (a * b));
console.log('A / B: ' + (a / b));
console.log('A % B: ' + (a % b));

// operadores de atribuição aritméticos (=, *=, /=, +=, -=):

 var e = 10;
 e += a;
 console.log('e += a: ' + e);
 e -= a;
 console.log('e -= a: ' + e);
 e *= a;
 console.log('e *= a: ' + e);
 e /= a;
 console.log('e /= a: ' + e);

// relacionais (==, !=, <, >, <=, >=) e lógicos (!, &&, ||) e unários (++, --):

console.log('A == B: '+ (a == b));
console.log('A != B: '+ (a != b));
console.log('A < B: '+ (a < b));
console.log('A > B: '+ (a > b));
console.log('A <= B: '+ (a <= b));
console.log('A >= B: '+ (a >= b));

c = false;
console.log('A é igual B e C é verdadeiro: '+ (a == b && c));
console.log('A é igual B ou C é verdadeiro: '+ (a == b || !c));

a = 10;
b = 10;
console.log('A é igual B? ' + (a++ == b));
console.log(a, b);
console.log('A é igual B? ' + (--a == ++b));
console.log(a, b);

a = "10";
b = 10;
console.log('A é igual B? '+ (a == b));
console.log(typeof(a), typeof(b));
console.log('A é igual B? '+ (a === b));


// (VARIÁVEIS) + (OPERADORES) + (ESTRUTURAS)
// Estruturas de decisão if/else, ternárias e switch:

a = 10;
b = 5;
if (a == b){
  console.log('A é igual a B!');
} else {
  console.log('A é diferente B!');
}

let mensagem = a != b ? "A é diferente B!" : "A é igual a B!"; 
console.log(mensagem);

// Estruturas de repetição while, do/while, for, for/in e for/of,  arrays.

const dias = [2,3,4,5,6];
switch (dias[9]) {
  case 2:
      console.log("Segunda-feira!");
    break;
  case 3:
      console.log("Terça-feira!");
    break;
  case 4:
      console.log("Quarta-feira!");
    break;    
  case 5:
      console.log("Quinta-feira!");
    break;  
  case 6:
      console.log("Sexta-feira!");
    break;    
  default:
      console.log("É final de semana!");
    break;
}

const executar = true;
const nomes = ['João', 'Pedro', 'Paulo', 'Tiago', 'Ana', 'Maria'];

let contador = 0;
console.log("\nRepetição utilizando while:")
while(contador < nomes.length && executar){
  console.log(nomes[contador]);
  contador++;
}

contador = 0;
console.log("\nRepetição utilizando do/while:")
do {
  console.log(nomes[contador]);
  contador++;
} while(contador < nomes.length && executar);


console.log("\nRepetição utilizando for convencional:");
for(let i = 0; i < nomes.length; i++){
  console.log(nomes[i]);
}

console.log("\nRepetição utilizando for/in:");
for(i in nomes){
  console.log(nomes[i]);
}

console.log("\nRepetição utilizando for/of:");
for(nome of nomes){
  console.log(nome);
}

// Funções:

a = 10;
b = 5;
function somar(a, b){
  return a + b;
}
function subtrair(a, b){
  return a - b;
}
const x = somar(45, 20);
console.log('Valor de X: ' + x);