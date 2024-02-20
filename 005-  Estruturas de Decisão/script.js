// Switch: é usada quando você tem várias condições a serem avaliadas para uma única variável e deseja executar diferentes blocos de código com base no valor dessa variável.
let diaDaSemana = 3;
switch (diaDaSemana) {
    case 1:
        console.log("Segunda-feira");
        break;
    case 2:
        console.log("Terça-feira");
        break;
    case 3:
        console.log("Quarta-feira");
        break;
    case 4:
        console.log("Quinta-feira");
        break;
    case 5:
        console.log("Sexta-feira");
        break;
    case 6:
    case 7:
        console.log("Fim de semana");
        break;
    default:
        console.log("Dia inválido");
}
