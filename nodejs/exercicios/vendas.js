/**
 * App para calcular o preço de venda do produto
 */

const read = require('readline-sync')

console.clear()
console.log("__ _____ _ _  __| |__ _ ___")
console.log("\ V / -_) ' \/ _` / _` (_-<")
console.log(" \_/\___|_||_\__,_\__,_/__/")

let custo,lucro,vendas

console.log("__________________________________")
console.log("Vamos calcular seu lucro em vendas")
console.log("__________________________________")

custo = Number(read.question("digite o valor do custo:  ").replace (",","."))
lucro = Number(read.question("digite o quanto voce deseja lucrar:  ").replace (",","."))

vendas = (custo*lucro)/100
vendas += custo 

console.log("_____________________________________________________________")
console.log(`custo: ${custo.toFixed(2)}`)  
console.log(`lucro:   ${lucro}%`)    
console.log(`vendas:   ${vendas.toFixed(2)}`)
console.log("______________________________________________________________")