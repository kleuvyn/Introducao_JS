// Uma função  é um bloco de código que pode ser 
// reutilizado para executar tarefas específicas

function soma(a, b) {
    return a + b;
}
  

/*Uma função arrow é uma forma mais concisa de escrever funções 
Ela é definida usando a notação "=>" que são frequentemente usadas para
funções anônimas e têm um escopo léxico, o que significa que elas 
herdam o valor "this" do contextocircundante de forma mais previsível
em comparação com as funções tradicionais.*/

const soma = (a, b) => a + b;
