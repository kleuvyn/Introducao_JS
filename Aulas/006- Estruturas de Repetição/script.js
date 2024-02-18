// for: O for é usado quando você sabe quantas vezes deseja repetir um bloco de código.
for (let i = 0; i < 5; i++) {
    console.log("O valor de i é: " + i);
}

// while: O while é usado quando você quer repetir um bloco de código enquanto uma condição especificada for verdadeira.
let contador = 0;
while (contador < 5) {
    console.log("O valor do contador é: " + contador);
    contador++;
}

// do...while: O do...while é semelhante ao while, mas a condição é verificada após a execução do bloco de código, o que garante que o bloco seja executado pelo menos uma vez.
let contado = 0;
do {
    console.log("O valor do contador é: " + contador);
    contador++;
} while (contador < 5);

// break para sair de uma estrutura de repetição antecipadamente e a declaração continue para pular a iteração atual e continuar com a próxima iteração.
for (let i = 0; i < 10; i++) {
    if (i === 3) {
        continue; // Pula a iteração atual se i for igual a 3
    }
    if (i === 7) {
        break; // Sai do loop se i for igual a 7
    }
    console.log(i);
}
