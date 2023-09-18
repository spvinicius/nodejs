/**
 * Jokempo
 */

const read = require ('readline-sync')
const colors = require ('colors')

let opcao , computador

console.clear()
console.log("===============================================".cyan)
console.log("===================JOKEMPO=====================".cyan)
console.log("===============================================".cyan)

console.log("1. PEDRA".white.italic)
console.log("2. PAPEL".white.italic)
console.log("3. TESOURA".white.italic)

opcao = Number(read.question("Escolha a sua opcao, vamos que vamos:    ".cyan.bold))
read.question("Pressione a tecla [ENTER] para o computador jogar	") 
computador = Math.floor(Math.random() * 3 + 1)

switch (opcao) {
case 1:
    console.log("Jogador escolheu pedra")
	break
case 2:
	console.log("Jogador escolheu papel")
	break
case 3:
	console.log("Jogador escolheu tesoura")
}

console.clear()
switch (computador) {
	case 1:
		console.log("Computador escolheu pedra")
		break
	case 2:
		console.log("Computador escolheu papel")
		break
	case 3:
		console.log("Computador escolheu tesoura")
	}

if (opcao==computador){
    console.log("EMPATE!".green)
}else if(opcao == 1 && computador == 3||opcao == 2 && computador == 1||opcao == 3 && computador == 2){
    console.log("JOGADOR VENCE!!".yellow)
}else{
    console.log("COMPUTADOR VENCE!!".red)
}

