// if: O if é usado para executar um bloco de código se uma condição especificada for verdadeira.

let idade = 18;
if (idade >= 18) {
    console.log("Você é maior de idade.");
}

// else if: O else if é usado para especificar uma nova condição se a condição anterior for falsa.

let horas = 14;
if (horas < 12) {
    console.log("Bom dia!");
} else if (horas < 18) {
    console.log("Boa tarde!");
} else {
    console.log("Boa noite!");
}


// else: O else é usado para executar um bloco de código se a condição do if for falsa.

let hora = 22;
if (hora < 12) {
    console.log("Bom dia!");
} else {
    console.log("Boa noite!");
}

// Além disso, você também pode encadear múltiplos else if para verificar várias condições.

let nota = 75;
if (nota >= 90) {
    console.log("A");
} else if (nota >= 80) {
    console.log("B");
} else if (nota >= 70) {
    console.log("C");
} else if (nota >= 60) {
    console.log("D");
} else {
    console.log("F");
}
