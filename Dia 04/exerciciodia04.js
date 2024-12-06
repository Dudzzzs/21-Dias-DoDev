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

nome2 = prompt('Digite seu nome: (Exercício 2)')
idade2 = Number(prompt('Digite sua idade: '))
temCnh = false
temCarro = false

// pedindo informações
opcaoCnh = prompt('Você possui CNH? (Sim ou Não)')
if(opcaoCnh === "Sim"){
    temCnh = true
}

opcaoCarro = prompt('Você possui veículo próprio? (Sim ou Não)')
if(opcaoCarro === 'Sim'){
    temCarro = true
}
 // Exibindo mensagem no console
 if (idade2 < 18 || !temCnh){console.log("Olá " + nome2 + ', você não pode dirigir!')
 }
else if (idade2 >= 18 && temCnh && !temCarro)
    {console.log ('Olá ' + nome2 + ', você pode dirigir mas não tem carro!')    
    }
    else{console.log('Olá ' + nome2 + ', você será o motorista!')
    }

