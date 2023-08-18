/**
 * 
 */

const read = require(`readline-sync`)

let x,y,valor

console.clear()
console.log("===================")
console.log("== Regra de três ==")
console.log("===================")
console.log("")

x = Number(read.question("Digite o valor de x: ").replace(",","."))
y = Number(read.question("Digite o valor de y: ").replace(",","."))

valor = (x*y) / 100

console.log(`${x}% de ${y} = ${valor}`)
