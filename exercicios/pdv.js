/**
 * PDV - ponto de vendas
 */

// importação de módulos
const read =require('readline-sync')

// variáveis
let total, desconto, valor, dinheiro, troco 

console.clear()
console.log("_____  ________     __")
console.log("|  __ \|  __ \ \    / /")
console.log("| |__) | |  | \ \  / / ")
console.log("|  ___/| |  | |\ \/ /  ")
console.log("| |    | |__| | \  /   ")
console.log("|_|    |_____/   \/    ")


// entrada
valor = Number(read.question("Digite o valor total da compra: "))
desconto = Number(read.question("Digite o valor  do desconto em %: "))

// processamento 1
total = valor - (desconto * valor) / 100
// saida 1
console.log(`total: R$ ${total.toFixed(2)}`)
console.log("")
console.log("__________________________________")
dinheiro = Number(read.question("Digite o valor pago em dinheiro: ").replace(",","."))
//processamento 2
troco = dinheiro - total
// saida 2
console.log(`troco: R$ ${troco.toFixed(2)}`)

                       
                       