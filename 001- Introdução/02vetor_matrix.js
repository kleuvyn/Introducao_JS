// Vetores (Arrays):
// Os vetores são estruturas de dados que armazenam uma coleção ordenada de elementos.
// Cada elemento em um vetor tem um índice que começa em 0.
let numeros = [1, 2, 3, 4, 5];
console.log(numeros[0]); 
console.log(numeros.length); 

// Matrizes (Arrays Multidimensionais):
// As matrizes são vetores com mais de uma dimensão, formando uma tabela ou grade.
// Cada elemento em uma matriz é acessado através de dois índices: linha e coluna.
let matriz = [
[1, 2, 3],
[4, 5, 6],
[7, 8, 9]
];
console.log(matriz[1][2]); 
console.log(matriz.length); 

// length retorna o número de elementos presentes no vetor.
let frutas = ['maçã', 'banana', 'laranja', 'morango'];
console.log(frutas.length);
frutas.length = 2; 

frutas.length = 5; 
console.log(frutas); 

let frutas = ['maçã', 'banana', 'laranja', 'morango'];
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]); 
}
