//Estrutura = for(criar variavel; condição; incrementador(variavel++ ou -- ou =-))
//                códgio que vai executar caso a condção seja veradeira  

let escolhaTabuada = Number(prompt('Escolha sua tabuada: '))

for(let contador = 0; contador <= 10; contador++){
    console.log(escolhaTabuada + ' x ' + contador + ' = ' + escolhaTabuada * contador   
)}

console.log('====== Exercício 1 ======')

let valor1 = Number(prompt('Escolha um valor para realizar a contagem: '))

for(let contagem = 0; contagem <= valor1; contagem++ ){
    console.log(contagem)
}

console.log('====== Exercício 2 ======')

for(let valor2 = 0; valor2 <= 50; valor2+=5){
    console.log(valor2)
}

console.log('====== Exercício 3 ======')

for(let valor3 = 50; valor3 >= 0; valor3 -= 5){
    console.log(valor3)
}

console.log('====== Exercício 4 ======')

let tabuadaEx4 = Number(prompt('Escolha um número para realizar a tabuada dele e dos seus 2 sucessores: '))

for(let i = tabuadaEx4; i <= tabuadaEx4 + 2; i++){
    console.log('Tabuada do número ' + i)
    for(let j = 0; j <= 10; j++){
        console.log(i + ' x ' + j + ' = ' + (i * j))
    }}