//Programa que receba um númeroe verifica se é par ou ímpar

let num = parseInt(prompt('Digite um número:'));
if(num % 2 ==0){
    console.log('Par');
}else{
    console.log('Ímpar');
}
//Prompt serve para pedir entrada do usr
//Alert e console.log mostra uma mensagem na tela

//Programa q faz fatorial de um número
let n = parseInt(prompt('Digite um número:'));
let contador = n;
let resultado = 1;
while(contador > 1){
    resultado=resultado*contador
    contador-=1
    console.log(resultado)
    }

//Programa que recebe tres números e encontra o maior
let x = parseInt(prompt('Digite um número:'));    
let y = parseInt(prompt('Digite um número:')); 
let z = parseInt(prompt('Digite um número:')); 
if(x>z && x>y){
    console.log(`O número ${x} é maior`)
}if (z>x && z>y) {
    console.log(`O número ${z} é maior`)
    
} else {
    console.log(`O número ${y} é maior`)
}