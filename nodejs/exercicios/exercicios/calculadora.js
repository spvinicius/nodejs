/**
 * Estudo das funções
 */

const read = require('readline-sync')
const color = require('colors')

console.clear()
console.log("calculadora\n".green)// \n quebra de linha
console.log("1. somar".bgBlue)
console.log("2. subtrair".bgRed)
console.log("3. multiplicar".bgYellow)
console.log("4. dividir".bgWhite)
console.log("5. porcentagem".bgMagenta)


let opcao = Number(read.question("Digite a opcao desejada: ").replace(",", "."))
//melhorando a experiencia do usúario(validação)
if (opcao < 1 || opcao > 5) {
    console.log("opção inválida")
    ProcessingInstruction.exit([0]) //encerra o aplçicartivo no console

}

let num1 = Number(read.question("Digite o primeiro valor: ").replace(",", "."))

let num2 = Number(read.question("Digite o segundo valor: ").replace(",", "."))


//função somar
//observação funçoes não atribuidas a variáveis podem ser declaradas no fim do código,funções atribuidas e arrowfunction precisam ser declaradas no inicio do código


function somar(num1, num2) {
    return console.log(`A soma de ${num1} + ${num2} = ${num1 + num2}`)
}


switch (opcao) {
    case 1:
        //executar a função somar()
        somar(num1, num2)
        break


}
switch (opcao) {
    case 2:
        //executar a função subtrair()
        subtrair(num1, num2)
        break

}

function subtrair(num1, num2) {
    return console.log(` subtrair  ${num1} - ${num2} = ${num1 - num2}`)
}


switch (opcao) {
    case 3:
        //executar a função multiplicar()
        multiplicar(num1, num2)
        break
}


function multiplicar(num1, num2) {
    return console.log(` multiplicar ${num1} * ${num2} = ${num1 * num2}`)
}


switch (opcao) {
    case 4:
        //executar a função dividir()
        dividir(num1, num2)
        break
}
        function dividir(num1, num2) {
            if (num2 === 0) {
             console.log("impossivel a divisão por zero")
            Process.exit([0])
             } else {
                return console.log(`A divisão de ${num1} / ${num2} = ${num1 / num2}`)

            }

        }

        switch (opcao) {
            case 5:
                //executar a função porcentagem()
                porcentagem(num1, num2)
                break
        }



function porcentagem(num1, num2) {
    return console.log(` porcentagem ${num1} % ${num2} = ${num1 * num2 / 100}`)
}



