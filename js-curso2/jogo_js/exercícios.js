//Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.
let nome = 12;
let contador = 1;
while(contador <=10) {
    console.log(`O número é ${contador}`)
    contador++
}

//Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.
let i = 10;
while(i <= 0){
    console.log(`${i}`)
    i--
}

//Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.
let numero = parseInt(Math.random()*10 +1); //ou
let numeros = parseInt(prompt("Digite um número para a contagem regressiva:"));

let contagem = 0;
while (numero >= 0){
    console.log(`${numero}`)
    contagem--
}


function inicial (){
    console.log('Olá,Mundo!')
}

function dobro(num){
    return num *2;
}

let resul = dobrar(5)
console.log(resul)

function media(num1,num2,num3){
    return num1 + num2+num3 / 3
}

let result=media(1,4,7)
console.log(result)

function maior(num1,num2){
    if(num1 >num2){
        return console.log(`O maior é ${num1}`)
    } else{
        return console.log(`O maior é ${num2}`)
    }
}

function mult(x){
    return x*x
}
let resu = mult(2)
console.log(resu)

let listaGenerica = []
let linguagensDeProgramacao = ['JavaScript','C','C++', 'Kotlin' ,'Python']
linguagensDeProgramacao.add('Java', 'Ruby' , 'GoLang')

let nomes = ['Vitória', 'Valentina','Maglio']
console.log(nomes[0])
nomes.pop();
for (let i = 0; i < nomes.length; i++){ //mostrar todos os itens com loop
    console.log(frutas[i]);
}
// Tamanho da lista
console.log(nomes.length); 
// Verifica se contém um item
console.log(frutas.includes("Maçã"));
// Índice de um item
console.log(frutas.indexOf("Laranja")); 
// Remover item específico (por índice)
let index = frutas.indexOf("Laranja");
if (index !== -1) {
  frutas.splice(index, 1); // remove 1 item a partir do índice encontrado
}
console.log(frutas); // ["Maçã"]