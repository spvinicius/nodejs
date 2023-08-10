/**
 * app para calcular a média de 2 notas
 */

//variáveis
let nome,disciplina
let nota1, nota2, media 

console.clear
console.log("########   #######  ##       ######## ######## #### ##     ##")
console.log("##     ## ##     ## ##       ##          ##     ##  ###   ###")
console.log("##     ## ##     ## ##       ##          ##     ##  #### ####")
console.log("########  ##     ## ##       ######      ##     ##  ## ### ##")
console.log("##     ## ##     ## ##       ##          ##     ##  ##     ##")
console.log("##     ## ##     ## ##       ##          ##     ##  ##     ##")
console.log("########   #######  ######## ########    ##    #### ##     ##")

                             
//entrada
nome = "vinicius nascimento"
disciplina = "matemática"
nota1 = 9
nota2 = 8

//processamento
media = (nota1 + nota2) /2 

//saida
console.log(`nome:  ${nome}`)
console.log(`disciplina: ${disciplina}`)
console.log(`nota1: ${nota1}`)
console.log(`nota2: ${nota2}`)
console.log(`média final: ${media}`)