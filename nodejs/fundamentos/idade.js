/**
 * app que diz se é maior ou menor de idade
 */

const read = require('readline-sync')
const color = require('colors')

let idade


console.clear()
console.log("_________________________________")
console.log("======MAIOR OU MENOR ?======")
console.log("_________________________________")

idade = (read.question("Digite a sua idade:   "))

if (idade <= 18) {
    console.log("Menor de idade".red)
} else {
    console.log("Maior de idade".green)    
}