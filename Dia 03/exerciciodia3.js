// Atribuindo as variáveis
let nome1 = ""
let idade = 0
let altura = 0
let peso = 0

// Entrada de Dados dos clientes
nome1 = prompt('Digite seu nome (primeiro e segundo nome): ')
idade = parseInt(prompt('Digite sua idade (use apenas números): '))
altura = prompt('Digite sua altura (use "," ex: 1,87): ')
altura = altura.replace(',','.')
altura = parseFloat(altura)
peso = parseInt(prompt('Digite seu peso em quilos (use apenas números): '))

// Calculando ano de nascimento e IMC
let anoNasc = 0
anoNasc = 2024 - idade

let imc = 0
imc = parseInt(peso / (altura * altura))


// Escrevendo a frase no console
console.log('Olá, '+ nome1 + '. Você tem ' + idade + ' anos, nasceu em ' 
    + anoNasc + ', mede ' + altura + ' metros de altura, pesa ' + peso + ' quilos e seu IMC é ' 
    + imc + ' Kg/m2.')