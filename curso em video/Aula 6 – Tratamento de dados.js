// Aula 02 variavel

var nome = window.prompt('Qual é o seu nome?');
window.alert(' É um grande prazer te conhecer, ' + nome + '!');

// Aula 03 String = Número

var numero01 = Number(window.prompt('Digite um número: '));
var numero02 = Number(window.prompt('Digite outro número: '));

var numero01 = Number.parseFloat(window.prompt('Digite um número: '));
var numero02 = Number.parseFloat(window.prompt('Digite outro número: '));

var numero01 = Number.parseInt(window.prompt('Digite um número: '));
var numero02 = Number.parseInt(window.prompt('Digite outro número: '));

var soma = numero01 + numero02

window.alert('A soma dos valores é: ' + soma);
window.alert(`A soma entre ${numero01} e ${numero02} é igual a ${soma}`);

// Número = String
window.alert('A soma dos valores é: ' + soma.toString ());
window.alert('A soma dos valores é: ' + String(soma));


//Aula 04  Formatando String
var nome = window.prompt('Qual é o seu nome?');
document.writeln(`Seu nome tem ${nome.length} letras`);
document.writeln(`Seu nome em minúscula  ${nome.toLowerCase()}`);
document.writeln(`Seu nome em maiúscula ${nome.toUpperCase()}`);

// length quantos CARACTERES a String tem
// toUpperCase tudp para MAIUSCULA
// toLowerCase tudo para MINUSCULA




