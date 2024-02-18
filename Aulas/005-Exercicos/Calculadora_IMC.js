const peso = 70;
const altura = 1.70;
const imc = Number((peso / (altura * altura)).toFixed(2)); 

switch(true){
    case imc <18.5:
        console.log("Abaixo do peso");
    break;

    case imc >=18.5 && imc <= 24.9:
        console.log("Peso normal ");
    break;

    case imc >=25 && imc <= 29.9:
        console.log("Pré-obesidade");
    break;

    case imc >=30 && imc <= 34.9:
        console.log("Obesidade Grau 1");
    break;

    case imc >=35 && imc <= 39.9:
        console.log("Obesidade Grau 2 ");
    break;

    case imc >40:
        console.log("Obesidade Grau 3");
    break;
}

console.log(imc);