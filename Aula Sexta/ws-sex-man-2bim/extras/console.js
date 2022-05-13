/**
  COMO UTILIZAR:
  1) Instalar o prompt-sync
     
    npm install prompt-sync

  2) Importar o console.

    const console = require("./extras/console")

  3) Utilizar as funções

    * console.getNumber(...)
    * console.getText(...)
    * console.log(...)

    var vlr1 = console.getNumber('Digite o 1o valor:');
    var vlr2 = console.getNumber('Digite o 2o valor:');

    var res = vlr1 + vlr2;

    console.log(res); 
 */

const prompt = require('prompt-sync')();

const getText = (message)=>{
  console.log(message);
  return prompt('> ');
}

const getNumber = (message)=>{
  console.log(message);
  return parseFloat(prompt('> '));
}

const log = (message)=>{
  console.log(message);
}

module.exports = {
  log,
  getText,
  getNumber
}