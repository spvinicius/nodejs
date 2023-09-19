/**
 * exemplo de uso da estrutura switch case
 */

const read = require("readline-sync")
const colors = require ("colors")

console.clear()
console.log("sistema operacional")
console.log("")
console.log("1. windows".yellow)
console.log("2. linux".green)
console.log("3. mac".red)
opcao = Number(read.question("Digite a opcao desejada: "))
switch (opcao) {
    case 1: 
    console.clear()
    console.log("carregando o windows...")

    break
    case 2: 
    console.clear()
    console.log("carregando o linux...")
    break
    case 3: 
    console.clear()
    console.log("carregando o mac...")
    brak
    default:
    console.log("opcao invalida")
    break
}