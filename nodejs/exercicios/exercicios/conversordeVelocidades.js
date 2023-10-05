/**
 * conversão de velocidade (milhas - km/h)
 */

const read = require('readline-sync')

let km,milhas
console.clear()

console.log("#    # # #      #    #   ##    ####              #    # #    #")
console.log("##  ## # #      #    #  #  #  #                  #   #  ##  ##") 
console.log("# ## # # #      ###### #    #  ####     #####    ####   # ## #") 
console.log("#    # # #      #    # ######      #             #  #   #    #") 
console.log("#    # # #      #    # #    # #    #             #   #  #    #") 
console.log("#    # # ###### #    # #    #  ####              #    # #    #") 

console.log("conversor de milhas em km/h")

milhas = Number(read.question("Digite o valor em milhas:" ).replace(",","."))
km = (milhas * 1.60934)

console.log
console.clear()
console.log("===================================================")
console.log(`==velocidade em km/h : ${km.toFixed(2)}==`)
console.log("===================================================")


