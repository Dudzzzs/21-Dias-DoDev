// Operadores && = e / || = ou

let idade1 = Number(prompt('Insira sua idade: '))
let nome = prompt ('Insira seu nome: ')

if (idade1 === 20 && nome === 'Eduardo'){console.log('Você tem 20 anos E se chama Eduardo.')
}
else if (idade1 === 20 || nome === 'Eduardo'){console.log('Você tem 20 anos OU se chama Eduardo')
} else{console.log('Você não tem 20 anos E não se chama Eduardo')}