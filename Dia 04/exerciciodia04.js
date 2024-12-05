// Exercício dia 04 - Primeira parte

console.log('PRIMEIRA PARTE')

let fome = prompt('Você está com fome? (Sim ou Não)')
let dinheiro = prompt('Você tem dinheiro? (Sim oiu Não)')
let restaurante = prompt('O restaurante está aberto? (Sim ou Não)')

if(fome === 'Não' || dinheiro === 'Não'){console.log('Hoje a janta será em casa!')
}
if(fome === 'Sim' && dinheiro === 'Sim' && restaurante === 'Não'){console.log('Peça um delivery!')    
}
if(fome === 'Sim' && dinheiro === 'Sim' && restaurante === 'Sim')
    {console.log('Hoje o jantar será no seu restaurante preferido!')
    }

// Exercício dia 04 - Segunda parte
console.log('SEGUNDA PARTE')

let nome2 = prompt('Digite seu nome (Exercício 2')
let idade2 = Number(prompt('Digite sua idade (Exercício 2)'))
let temCnh = false
let temCarro = false

// pedindo informações
let opcaoCnh = prompt('Você tem CNH? (Sim ou Não)')
if(opcaoCnh = 'Sim'){
    temCnh = true
}
let opcaoCarro = prompt('Você tem veiculo próprio? (Sim ou não)')
if(opcaoCarro = 'Sim'){
    temCarro = true
}

 // Exibindo mensagem no console
