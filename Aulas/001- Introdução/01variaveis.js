// var:Declara variáveis com escopo global ou de função.
var contador = 0;
function incrementar() {
    contador++;
}
incrementar();
console.log(contador); 

// let: Permite declarar variáveis que podem ser reatribuídas.
let idade = 25;
idade = 30; 
console.log(idade); 

// const: Permite declarar variáveis constantes, cujo valor não pode ser alterado após a atribuição inicial.
const PI = 3.14;
console.log(PI); 

