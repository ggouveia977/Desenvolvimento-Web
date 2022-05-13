const console = require("./extras/console")

 function exercicio1(){

     const numero = console.getNumber("Informe um número: ");

     if (numero > 10){
         console.log("Número maior do que 10!");
     } else {
         console.log("Número menor do que 10!");
     }
 }

 exercicio1();

/*
function exercicio16(){

    const nota1 = console.getNumber("Informe a nota 1: ");
    const nota2 = console.getNumber("Informe a nota 2: ");
    const nota3 = console.getNumber("Informe a nota 3: ");
    const media = (nota1 + nota2 + nota3) / 3;
    console.log("Média aritimétrica: " + media);

}

exercicio16();
*/

//Exercício 2
//Ex 2. Escreva um algoritmo que leia dois números digitados pelo usuário e exiba o resultado da sua soma.

// function exercicio2(){

//     const num2 = console.getNumber("Digite um número: ");
//     const num1 = console.getNumber("Digite um número: ");
//     const soma = (num1 + num2);
//     console.log("Resultado: " + soma);

// }

// exercicio2();

