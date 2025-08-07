alert('Boas vindas ao jogo secreto!');
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random()*numeroMaximo +1);
console.log(numeroSecreto);
let chute;
let tentativas =1;
while(chute != numeroSecreto) {
    chute = prompt(`Escolha um número de 1 a ${numeroMaximo}`);
    if(chute == numeroSecreto){
        break
    } else {
        tentativas ++;
        if(numeroSecreto > chute){
            alert(`O número secreto é maior que o chute ${chute}`)
        }else {
            alert(`O número secreto é menor que ${chute}`)
        }
        alert('Você errou :(')
    }

}
let palavraTentativa = tentativas >1 ? 'tentativas' : 'tentativa'; //OPERADOR TERNÁRIO
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas}.`)
//if(tentativas > 1){
//    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`)
//
//}else{
//alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa.`)
//}


/*Para começar passando uma mensagem, você começa com alert, para mostar uma janela na tela em forma de aviso.
Prompt serve para coletar dados do usuário.
Toda linha deve terminar com ;
Var nome = valor
Condição: fazer uma condição para comparar o número digitado pelo número secreto
TEMPLATE STRING-> entre crase, ${}
Console.log imprime mensagens no console do ambiente de desenvolvimento.
while -> usar para dizer que faça as instruções enquanto algo for verdadeiro
operadores lógicos
and &&
or ||
igual ==
diferente !=
Raciciocínio para construir o código:
Primeiro nos declaramos um número secreto, depois precisamos nomear com uma var o numero que o user vai colocar e tbmsaber a quantidade de tentativas q ela vai ter, iniciando com uma.
Depois precisamos construir a lógica de enquanto o user n adivinhar o numero, ele continua jogando, e se acertar para.
Depois, analisar q a quant de tentativas precisa ser mostrada gramaticalmente correto pro user, assim criar um if para quando sair no plural ou singular as tentativas, usando OPERADOR TERNÁRIO.

pARA VC Não precisar colocar toda hora um número secreto diferente, vc usa um Math.random()que retorna um número aleatório, maior q 0 e menor q 1
usar o comando -> parseInt(Math.random() * 10 + 1) para pegar a parte inteira e gerar um int. Esse + 1 serve para que o programa inclua 10, pois sem só vai até 9.

Agora para que quando a gnt escolha o numero secreto de tal até tal, a pergunta tbm mudepara o user:
criar uma var com o número máxio q o sistema pode gerar, depois multiplicar o math.random por essa var, e colocala com template string na mensagem que aparece pro user.







*/