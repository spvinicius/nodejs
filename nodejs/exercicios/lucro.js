


/**
 * Calcular o presço de venda de um produto em funçao do preço de custo e margem de lucro
 */

//importaçao de módulos
const read = require(`readline-sync`)

console.clear()

console.log("dP        dP     dP  a88888b.  888888ba   .88888.")  
console.log("88        88     88 d8'   `88  88    `8b d8'   `8b") 
console.log("88        88     88 88        a88aaaa8P' 88     88 ")
console.log("88        88     88 88         88   `8b. 88     88") 
console.log("88        Y8.   .8P Y8.   .88  88     88 Y8.   .8P") 
console.log("88888888P `Y88888P'  Y88888P'  dP     dP  `8888P'")  
                                                   
                                                   
custo = Number(read.question("digite o valor do custo:  ").replace (",","."))
lucro = Number(read.question("digite o quanto voce deseja lucrar:  ").replace (",","."))

vendas = (custo*lucro)/100
vendas += custo 

console.log("==================================================================================")
console.log(`custo: ${custo.toFixed(2)}`)  
console.log(`lucro:   ${lucro}%`)    
console.log(`vendas:   ${vendas.toFixed(2)}`)
console.log("==================================================================================")








