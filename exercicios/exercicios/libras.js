/**
 * Conversor de libras em kilos
 */

const read = require('readline-sync')

let libras,kilos

console.clear

console.log("Conversor de Libras em kilos ")

libras = (read.question("Digite o valor em libras:  ")).replace(",",".")
kilos = (libras* 0.45359237)

console.log
console.clear()
console.log("=================================")
console.log(`kilos: ${kilos.toFixed(2)}`)
console.log("=================================")