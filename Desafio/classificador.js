let nome = prompt("Digite o nome do herói:");
let vitorias = parseInt(prompt("Digite a quantidade de experiência do herói:"));

let nivel;

if (vitorias < 1000) {
    nivel = "Ferro";
} else if (vitorias >= 1001 && vitorias <= 2000) {
    nivel = "Bronze";
} else if (vitorias >= 2001 && vitorias <= 5000) {
    nivel = "Prata";
} else if (vitorias >= 5001 && vitorias <= 7000) {
    nivel = "Ouro";
} else if (vitorias >= 7001 && vitorias <= 8000) {
    nivel = "Platina";
} else if (vitorias >= 8001 && vitorias <= 9000) {
    nivel = "Ascendente";
} else if (vitorias >= 9001 && vitorias <= 10000) {
    nivel = "Imortal";
} else {
    nivel = "Radiante";
}

console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
