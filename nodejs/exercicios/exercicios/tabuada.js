/**
 * exemplo de uso do laço for - tabuada
 */

const read =require (`readline-sync`)
const color = require(`colors`)
let valor 
console.clear()
console.log("---------tabuada-------")

valor = Number(read.question("digite o valor da tabuada".red))
for (let i = 1; i < 11; i++) {
    console.log(`${valor} x ${i} = (${valor *i})`)
}