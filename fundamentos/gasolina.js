/**
 * App vale mais gasolina ou etanol ?
 */

const read = require('readline-sync')
const color = require('colors')

let gasolina, etanol

console.clear()
console.log("___  ___  ___ _____ ___  ")
console.log("| _ \// _ \\/ __|_   _/ _ \\ ")
console.log("|  _/ (_) \\__ \\ | || (_) |")
console.log("|_|  \\___/|___/ |_| \\___/ ")
console.log("                         ")
console.log("_________________________________")
console.log("======GASOLINA OU ETANOL ?======")
console.log("_________________________________")
console.log("Vamos te respoder agora !")


gasolina = Number(read.question("Digite o valor da gasolina que voce deseja: ").replace(",","."))
etanol = Number(read.question("Digite o valor do etanol que voce deseja: ").replace(",","."))

console.clear()
if (etanol / gasolina <= 0.7) {
    console.log("Abasteca no posto Ipiranga com etanol".blue)
} else {
    console.log("Abasteca no posto Ipiranga com gasolina".green)
}
