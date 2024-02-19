function rank(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;
    let nivel;

    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 70) {
        nivel = "Ouro";
    } else if (vitorias >= 71 && vitorias <= 80) {
        nivel = "Diamante";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Lendario";
    } else {
        nivel = "Imortal";
    }

    return { saldoVitorias, nivel };
}

let vitorias = parseInt(prompt("Digite quantidade de vitórias que teve o herói:"));
let derrotas = parseInt(prompt("Digite a quantidade de derrotas que teve o herói:"));

const resultado = rank(vitorias, derrotas);
console.log(`O Herói tem um saldo de ${resultado.saldoVitorias}, está no nível de ${resultado.nivel}`);
