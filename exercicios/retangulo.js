/**
 * calculo da area e perimetro de um retangulo
 */

const red = require(`readline-sync`)

let base,altura,area,perimetro
console.clear()
console.log("retangulo")
console.log("")
console.log("________________________________")
console.log("|                               |")
console.log("|                               | altura ")
console.log("|                               |")
console.log("________________________________")
console.log("               base             ")
console.log

//entrada


//processamento 1
area = base * altura
//processamento 2

perimetro = base + altura + base + altura

//saida 1 
console.log(`area do retangulo: ${area.toFixed(2)}`)