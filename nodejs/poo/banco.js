/**
 * exercício de fixação POO
 */
class conta {
    //atributos
    constructor(numero, titular, saldo) {
        this.numero = numero
        this.titular = titular
        this.saldo = saldo
    }
    //métodos
    exibirSaldo() {
        console.log(`saldo: R$ ${this.saldo.toFixed(2)}`)
    }
    exibirSaldoP1() {
        console.log(`saldo conta poupança: R$ ${this.saldo.toFixed(2)}`)
    }
    depositar(valor){
        this.saldo += valor
        console.log(`Crédito de R$ ${valor.toFixed(2)}`)
    }
    sacar(valor) {
        //validação
        if(valor <= this.saldo) {
            this.saldo -= valor
            console.log(`Débito de R$ ${valor.toFixed(2)} `)   
        } else {
            console.log("Saque não permitido")
        }
    }
}

/***Clientes***/
console.clear()

console.log("BBBBBBBBBBBBBBBBB               AAA               NNNNNNNN        NNNNNNNN        CCCCCCCCCCCCC     OOOOOOOOO  ")
console.log("B::::::::::::::::B             A:::A              N:::::::N       N::::::N     CCC::::::::::::C   OO:::::::::OO   ")
console.log("B::::::BBBBBB:::::B           A:::::A             N::::::::N      N::::::N   CC:::::::::::::::C OO:::::::::::::OO ")
console.log("BB:::::B     B:::::B         A:::::::A            N:::::::::N     N::::::N  C:::::CCCCCCCC::::CO:::::::OOO:::::::O")
console.log("  B::::B     B:::::B        A:::::::::A           N::::::::::N    N::::::N C:::::C       CCCCCCO::::::O   O::::::O")
console.log("  B::::B     B:::::B       A:::::A:::::A          N:::::::::::N   N::::::NC:::::C              O:::::O     O:::::O")
console.log("  B::::BBBBBB:::::B       A:::::A A:::::A         N:::::::N::::N  N::::::NC:::::C              O:::::O     O:::::O")
console.log("  B:::::::::::::BB       A:::::A   A:::::A        N::::::N N::::N N::::::NC:::::C              O:::::O     O:::::O")
console.log("  B::::BBBBBB:::::B     A:::::A     A:::::A       N::::::N  N::::N:::::::NC:::::C              O:::::O     O:::::O")
console.log("  B::::B     B:::::B   A:::::AAAAAAAAA:::::A      N::::::N   N:::::::::::NC:::::C              O:::::O     O:::::O")
console.log("  B::::B     B:::::B  A:::::::::::::::::::::A     N::::::N    N::::::::::NC:::::C              O:::::O     O:::::O")
console.log("  B::::B     B:::::B A:::::AAAAAAAAAAAAA:::::A    N::::::N     N:::::::::N C:::::C       CCCCCCO::::::O   O::::::O")
console.log("BB:::::BBBBBB::::::BA:::::A             A:::::A   N::::::N      N::::::::N  C:::::CCCCCCCC::::CO:::::::OOO:::::::O")
console.log("B:::::::::::::::::BA:::::A               A:::::A  N::::::N       N:::::::N   CC:::::::::::::::C OO:::::::::::::OO ")
console.log("B::::::::::::::::BA:::::A                 A:::::A N::::::N        N::::::N     CCC::::::::::::C   OO:::::::::OO   ")
console.log("BBBBBBBBBBBBBBBBBAAAAAAA                   AAAAAAANNNNNNNN         NNNNNNN        CCCCCCCCCCCCC     OOOOOOOOO     ")

console.log("")
//instanciar um objeto
let cc1 = new conta(1, "leandro Ramos", 30000)
console.log(`Cliente: ${cc1.titular} conta: ${cc1.numero}`)
cc1.exibirSaldo()
cc1.depositar(5000)
cc1.exibirSaldo()
cc1.sacar(50000000)
cc1.exibirSaldo

let p1 = new conta(2, "Leandro Ramos" , 10000)
console.log(`Cliente: ${p1.titular} conta: ${p1.numero}`)
p1.exibirSaldoP1 ()



