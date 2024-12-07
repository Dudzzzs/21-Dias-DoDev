let num1 = Number(prompt('Escolha o primeiro número:'))
let num2 = Number(prompt('Escolha o segundo número:'))
let operacao = Number(prompt('Escolha qual operação quer fazer entre esses números: '
    + '\n1= +; \n2 = -; \n3 = *; \n4 = /;'))

    switch(operacao){
        case 1:
            console.log(num1 + ' + ' + num2 + ' = ' + (num1 + num2))
            break;
        case 2:
            console.log(num1 + ' - ' + num2 + ' = ' + (num1 - num2))
            break;
        case 3:
            console.log(num1 + ' x ' + num2 + ' = ' + (num1 * num2))
            break;
        case 4:
            console.log(num1 + ' / ' + num2 + ' = ' + (num1 / num2))
            break;
        default:
        console.log('Opção inválida!')
            break;           
    }

console.log('====== Segundo Exercício ======')

let precoGaso = 5
let precoEta = 3
let opcao = Number(prompt('O que você deseja hoje senhor? '
     + ' \n1 = Abastecer com gasolina; \n2 = Abastecer com Etanol; \n3 = Calibrar os pneus'))
    
     if(opcao !== 1 && opcao !== 2 && opcao !== 3 )
        {console.log('Então vá pra casa!') 
     } else if(opcao === 3){
        console.log('Pneus calibrados com sucesso!')
     } else{ 
        let valor = parseInt((prompt('Qual valor você deseja? ')))
            switch(opcao){
                    case 1:
                        console.log('Você abasteceu ' + valor / precoGaso + ' litros de gasolina!')
                            break;
                    case 2:
                        console.log("Você abasteceu " + valor / precoEta + ' litros de etanol!')
                            break;
    }}



