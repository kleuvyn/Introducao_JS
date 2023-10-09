const palavra = "Amora Vermelha colhida na arvore".toLowerCase().replaceAll(" ", "");
//return console.log(palavra)
let letras = {}

console.log(palavra.length);

for(let i = 0; i<palavra.length; i++){
    console.log(i)
}

for(let i = 0; i<palavra.length; i++){
    console.log(palavra[i]);
}

for(let i = 0; i<palavra.length; i++){
    letras[palavra[i]] = 1;
    console.log(letras);
 }

for(let i = 0; i < palavra.length; i++){
    if(letras[palavra[i]]){
        letras[palavra[i]]++;
     }else{
    letras[palavra[i]] = 1;
}
}
console.log(letras);