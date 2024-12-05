// Dia 04: Aprendendo sobre condicionais
// == igual | != diferente | > maior que | < menor que | >= maior ou igual | <= menor ou igual
// === igual, compara o valor e o tipo da variável | !== diferente, compara o valor e o tipo da variável

let condicao = false

// If = Se for verdadeiro | else = Se for falso

if(condicao){
    console.log('Entrou no if')
}else{
console.log('Entrou no else')
}

let idade = Number(prompt('Insira sua idade: '))
if(idade >= 18){console.log('Você pode usar nosso site pois é maior de idade.')
} else{console.log('Você não pode usar nosso site pois é menor de idade.')
}

// Escopo = Grupo de código determinado por {}

