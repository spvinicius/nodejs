/**
 * estudo das funções
 * funções simples sem parãmetros ou retorno
 */

// sintaxe comum 
function somar(num1, num2) {
    return (console.log(num1 + num2))
}
//para executar a função,devemos passar 2 valores
somar(2, 5)

//funções atribuida
let somarA = function somar(num1, num2) {
    return (console.log(num1 + num2))
}
somarA(5, 5)


//Arrow function
let somarAF =(num1, num2) => {
    return (console.log(num1 + num2))
}
somarAF(2, 2)