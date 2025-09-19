import * as readline from 'readline'
import Mensagens from './mensagens'
import Soma from './soma'
import Subtracao from './subtracao'
import Multiplicacao from './multiplicacao'
import Divisao from './divisao'
import Bhaskara from './bhaskara'
import Potenciacao from './potenciacao'
import Radiciacao from './radiciacao'

let mensagens = new Mensagens()

let iniciar = () => {
    let leitor = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })

    leitor.question(`Quais são seus números e a operação desejada?\n`, (valor) => {
        let instrucoes = valor.trim().split(' ')
        let numero1 = Number(instrucoes[0])
        let numero2 = Number(instrucoes[1])
        let numero3: number = 0
        let operacao = instrucoes[instrucoes.length - 1]
        if(instrucoes.length == 1) operacao = instrucoes[0]
        else if (operacao === 'Bhaskara') numero3 = Number(instrucoes[2])

    console.log(`Estas foram suas instruções: ${instrucoes}\n`)
    let calculo: Soma | Subtracao | Multiplicacao | Divisao | Potenciacao | Radiciacao | Bhaskara
    
    switch (operacao){
        case 'Somar':
            calculo = new Soma()
            console.log(`O resultado da operação é ${calculo.calcular(numero1, numero2)}\n`)
            break
        case 'Subtrair':
            calculo = new Subtracao()
            console.log(`O resultado da operação é ${calculo.calcular(numero1, numero2)}\n`)
            break
        case 'Multiplicar':
            calculo = new Multiplicacao()
            console.log(`O resultado da operação é ${calculo.calcular(numero1, numero2)}\n`)
            break
        case 'Dividir':
            calculo = new Divisao()
            console.log(`O resultado da operação é ${calculo.calcular(numero1, numero2)}\n`)
            break
        case 'Elevar':
            calculo = new Potenciacao()
            console.log(`O resultado da operação é ${calculo.calcular(numero1, numero2)}\n`)
            break
        case 'Raiz':
            calculo = new Radiciacao()
            console.log(`O resultado da operação é ${calculo.calcular(numero1, numero2)}\n`)
            break
        case 'Bhaskara':
            calculo = new Bhaskara()
            console.log(`O resultado da operação é ${calculo.calcular(numero1, numero2, numero3)}\n`)
            break
        case 'Sair':
            console.log(`Até uma próxima, falou...`)
            break
        default:
        console.log(`Operação não entendida :(`)
        }
        leitor.close()
        if (operacao != 'Sair'){
            mensagens.listarOpcoes()
            mensagens.comoUsar()
            iniciar()
        }
    })
}
mensagens.boasVindas()
mensagens.listarOpcoes()
mensagens.comoUsar()
iniciar()

