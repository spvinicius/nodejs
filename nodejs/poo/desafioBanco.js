/**
 * Exercício de fixação - POO
 */

const read = require('readline-sync')
const colors = require('colors')

//classe modelo
class Conta {
	//Atributos
    constructor(numero, titular, saldo) {
        this._titular = titular
        this._saldo = saldo
        this._numero = numero
    }

    getTitular() {
        return this._titular
    }

    getSaldo() {
        return this._saldo
    }

    getNumero() {
        return this._numero
    }
	//ações
    exibirSaldo() {
        console.log(` Saldo da conta ${this.getTitular()} é R$ ${this.getSaldo().toFixed(2)}.`)
    }

    depositar(valor) {
        this._saldo += valor
        console.log(`Crédito de R$ ${valor.toFixed(2)}`)
    }

    sacar(valor) {
        if (valor <= this._saldo) {
            this._saldo -= valor
            console.log(`Débito de R$ ${valor.toFixed(2)}`)
        } else {
            console.log("Negada! Saldo insuficiente !")
        }
    }

    pix(valor, destino) {
        if (valor <= this._saldo) {
            this._saldo -= valor
            destino.depositar(valor)
            console.log(`PIX R$ ${valor.toFixed(2)} para poupanca ${destino.getTitular()} ,pix realizado com sucesso.`)
        } else {
            console.log("Negada! Saldo insuficiente.")
        }
    }
}

//poupança
class ContaPoupanca extends Conta {
	//atributos
    constructor(numero, titular, saldo) {
        super(numero, titular, saldo)
    }
 	//metodo
    exibirSaldoPoupanca() {
        console.log(`O saldo da conta Poupança do ${this.getTitular()} é R$ ${this.getSaldo().toFixed(2)}.`)
    }
}

console.clear()
console.log("██████   █████  ███    ██  ██████  ██████  ".red)
console.log("██   ██ ██   ██ ████   ██ ██      ██    ██ ".red)
console.log("██████  ███████ ██ ██  ██ ██      ██    ██ ".red)
console.log("██   ██ ██   ██ ██  ██ ██ ██      ██    ██ ".red)
console.log("██████  ██   ██ ██   ████  ██████  ██████  ".red)
console.log()

//criação Poupança Vaamond
let cp1 = new ContaPoupanca(10,"Robson Vaamond", 8000)
console.log(`Cliente: ${cp1.getTitular()} | conta: ${cp1.getNumero()}`.red)
cp1.exibirSaldoPoupanca()
console.log()
//criação Poupança Sirlene
let cp2 = new ContaPoupanca(20,"Sirlene Aparecida", 7000)
console.log(`Cliente: ${cp2.getTitular()} | conta: ${cp2.getNumero()}`.red)
cp2.exibirSaldoPoupanca()
console.log()

let cp3 = new ContaPoupanca(30,"Leandro Ramos", 5000)
console.log(`Cliente: ${cp3.getTitular()} | conta: ${cp3.getNumero()}`.red)
cp3.exibirSaldoPoupanca()
console.log()

//criação Vaamond
let cc1 = new Conta(1, "Robson Vaamond", 4000)
console.log(`Cliente: ${cc1.getTitular()} | conta: ${cc1.getNumero()}`.blue)
cc1.exibirSaldo()
cc1.depositar(1000)
cc1.exibirSaldo()
cc1.sacar(40)
cc1.exibirSaldo()
cc1.pix(300, cp1); // pix de Leandro para Robson
console.log()

//criação Sirlene
let cc2 = new Conta (2, "Sirlene Aparecida", 3000)
console.log(`Cliente: ${cc2.getTitular()} | conta: ${cc2.getNumero()}`.blue)
cc2.exibirSaldo()
cc2.depositar(2000)
cc2.exibirSaldo()
cc2.sacar(40)
cc2.exibirSaldo()
console.log()

let cc3 = new Conta (3, "Leandro Ramos", 1000)
console.log(`Cliente: ${cc3.getTitular()} | conta: ${cc3.getNumero()}`.blue)
cc3.exibirSaldo()
cc3.depositar(2000)
cc3.exibirSaldo()
cc3.sacar(40)
cc3.exibirSaldo()
cc3.pix(200, cc2); // pix de Leandro para Sirlene
cc3.pix(100, cp1); // transferência de Leandro para Vaamond Poupança 

console.log()
console.log("Extrato:");
console.log()
console.log(`Cliente: ${cc1.getTitular()} | conta: ${cc1.getNumero()}`.green)
cc1.exibirSaldo();
console.log(`Cliente: ${cp1.getTitular()} | conta: ${cp1.getNumero()}`.white)
cp1.exibirSaldo();
console.log("----------------------------------------------------------------")
console.log(`Cliente: ${cc2.getTitular()} | conta: ${cc2.getNumero()}`.green)
cc2.exibirSaldo();
console.log(`Cliente: ${cp2.getTitular()} | conta: ${cp2.getNumero()}`.white)
cp2.exibirSaldo();
console.log("----------------------------------------------------------------")
console.log(`Cliente: ${cc3.getTitular()} | conta: ${cc3.getNumero()}`.green)
cc3.exibirSaldo();
console.log(`Cliente: ${cp3.getTitular()} | conta: ${cp3.getNumero()}`.white)
cp3.exibirSaldo();


