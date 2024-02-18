/* 
Array 

 é uma estrutura de dados que permite armazenar uma coleção de valores em uma única variável. 
 Cada valor em um array é identificado por um índice, e os índices são baseados em zero, 
 o que significa que o primeiro elemento do array tem o índice 0, 
 o segundo tem o índice 1 e assim por diante.
*/

console.log([1, 2, 3, 4, 5]);

const meuArray = [1, 2, 3, 4, 5];
const primeiroValor = meuArray[0]; // Obtém o primeiro elemento (valor 1)
const segundoValor = meuArray[1]; // Obtém o segundo elemento (valor 2)
meuArray.push(6); // Adiciona o valor 6 no final do array
meuArray.pop(); // Remove o último elemento do array
meuArray[2] = 42; // Modifica o terceiro elemento para 42
const tamanhoDoArray = meuArray.length; // Obtém o número de elementos (neste caso, 5)
