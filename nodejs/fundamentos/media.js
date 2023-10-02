/**
 * app para calcular a média de 2 notas
 */

//importação do pacote readline-sync
const read = require('readline-sync')

//importação do pacote colors
const colors = require(`colors`)

//variáveis
let nome,disciplina
let nota1, nota2, media 

console.clear()
console.log("########   #######  ##       ######## ######## #### ##     ##")
console.log("##     ## ##     ## ##       ##          ##     ##  ###   ###")
console.log("##     ## ##     ## ##       ##          ##     ##  #### ####")
console.log("########  ##     ## ##       ######      ##     ##  ## ### ##")
console.log("##     ## ##     ## ##       ##          ##     ##  ##     ##")
console.log("##     ## ##     ## ##       ##          ##     ##  ##     ##")
console.log("########   #######  ######## ########    ##    #### ##     ##")

                             
//entrada
nome = read.question("digite o seu nome: ")
disciplina = read.question("digite a disciplina: ")
nota1 = Number(read.question("digite a nota1: ").replace(",","."))
nota2 = Number(read.question("digite a nota2 ").replace(",","."))

//processamento
media = (nota1 + nota2) /2 

//saida
console.clear()
console.log("----------------------------------")
console.log("Ficha do Aluno:")
console.log(`nome:  ${nome}`)
console.log(`disciplina: ${disciplina}`)
console.log(`nota1: ${nota1}`)
console.log(`nota2: ${nota2}`)
console.log(`média final: ${media}`)
if (media < 5) {
console.log("REPROVADO".red)

} else {
    console.log(" APROVADO".blue)
}

console.log("-----------------------------------")