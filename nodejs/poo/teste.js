/**
 * exercicio de fixação - poo 
 * 
*/
const read = require(`readline-sync`)
const colors = require(`colors`)


//modelo 
class conta{
    constructor(numero, titular, saldo){
     //-----------------------------------------------------------------------------------
        let _numero = numero // let _idade (encapsular a variavel)
        //metodos get e set (para acessar a variavel idade)
        this.getNumero = () => {
            return _numero
        }
        this.setNumero =(novoNumero) => {
            _numero = novoNumero
        }
        //-----------------------------------------------------------------------------------
        let _titular = titular // let _idade (encapsular a variavel)
        //metodos get e set (para acessar a variavel idade)
        this.getTitular = () => {
            return _titular
        }
        this.setTitular =(novoTitular) => {
            _titular = novoTitular
        }
        //-----------------------------------------------------------------------------------
        let _saldo = saldo // let _idade (encapsular a variavel)
        //metodos get e set (para acessar a variavel idade)
        this.getSaldo = () => {
            return _saldo
        }
        this.setSaldo =(novoSaldo) => {
            _saldo = novoSaldo
        }


    }
    

        // métodos
        exibirSaldo() {
            console.log(`saldo: R$ ${this.getSaldo().toFixed(2)}`)
        }
    
        depositar(valor) {
            this.setSaldo(this.getSaldo() + valor);
            console.log(`Credito de R$ ${valor.toFixed(2)}`)
        }
    
        sacar(valor) {
            // validação
            if (valor <= this.getSaldo()) {
                this.setSaldo(this.getSaldo() - valor)
                console.log(`Debito R$ ${valor.toFixed(2)}`)
            } else {
                console.log("Saque não permitido")
            }
        }
    
        pix(clienteFinal, valor) {
            // Validação
            if (valor <= this.getSaldo()) {
                this.setSaldo(this.getSaldo() - valor)
                clienteFinal.depositar(valor)
                console.log(`Transferência PIX de R$ ${valor.toFixed(2)} realizada com sucesso para ${clienteFinal.getTitular()}!`)
            } else {
                console.log("Transferência PIX não permitida, saldo insuficiente.")
            }
        }
    
        contaCorrente(valor, contaPoupanca) {
            if (valor <= this.getSaldo()) {
                this.setSaldo(this.getSaldo() - valor)
                contaPoupanca.depositar(valor)
                console.log(`Transferência de R$ ${valor.toFixed(2)} realizada com sucesso para a poupança de ${contaPoupanca.getTitular()}!`)
            } else {
                console.log("Transferência não permitida, saldo insuficiente.")
            }
        }
    }
    
    class Poupanca extends conta {
        constructor(numero, titular, saldo) {
           super(numero, titular, saldo)
        }
    
        exibirSaldoPoupanca() {
            console.log(`saldo da Poupança é de R$:${this.getSaldo().toFixed(2)}`)
        }
    }



/**
 * clientes
 */

console.clear()

console.log("██████   █████  ███    ██  ██████  ██████  ".blue)
console.log("██   ██ ██   ██ ████   ██ ██      ██    ██ ".blue)
console.log("██████  ███████ ██ ██  ██ ██      ██    ██ ".blue)
console.log("██   ██ ██   ██ ██  ██ ██ ██      ██    ██ ".blue)
console.log("██████  ██   ██ ██   ████  ██████  ██████  ".blue)
console.log()

                        


//instanciar um objeto
let cc1 = new conta (1, "Leandro Ramos", 20000)
console.log(`Cliente: ${cc1.getTitular()} conta ${cc1.getNumero()}`)
cc1.exibirSaldo()
cc1.depositar(1000)
cc1.exibirSaldo()
cc1.sacar(1000)
cc1.exibirSaldo()
let cc1p = new Poupanca (5001, "Leandro Ramos", 500)
cc1p.exibirSaldoPoupanca()
console.log("------------------------------------------------")



console.log("██████   █████  ███    ██  ██████  ██████  ".blue)
console.log("██   ██ ██   ██ ████   ██ ██      ██    ██ ".blue)
console.log("██████  ███████ ██ ██  ██ ██      ██    ██ ".blue)
console.log("██   ██ ██   ██ ██  ██ ██ ██      ██    ██ ".blue)
console.log("██████  ██   ██ ██   ████  ██████  ██████  ".blue)
console.log()

let cc2Robson = new conta (2, "Robson Vaamonde", 30000)
let cc2RobsonPoupanca = new Poupanca(5002, "Robson Vaamonde", 20000)
console.log(`Cliente: ${cc2Robson.getTitular()} Conta ${cc2Robson.getNumero()}`)
cc2Robson.contaCorrente(5000, cc2RobsonPoupanca);
cc2RobsonPoupanca.exibirSaldoPoupanca()
cc2Robson.exibirSaldo()
cc2Robson.depositar(4000)



console.log("------------------------------------------------")



console.log("██████   █████  ███    ██  ██████  ██████  ".blue)
console.log("██   ██ ██   ██ ████   ██ ██      ██    ██ ".blue)
console.log("██████  ███████ ██ ██  ██ ██      ██    ██ ".blue)
console.log("██   ██ ██   ██ ██  ██ ██ ██      ██    ██ ".blue)
console.log("██████  ██   ██ ██   ████  ██████  ██████  ".blue)
console.log()

let cc2Sirlene = new conta (3, "Sirlene Aparecida", 20000)
console.log(`Cliente: ${cc2Sirlene.getTitular()} Conta ${cc2Sirlene.getNumero()}`)
cc2Sirlene.exibirSaldo()
cc1.pix(cc2Sirlene, 500)
cc2Sirlene.exibirSaldo()