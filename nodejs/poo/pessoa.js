/**
 * POO- estudo do encapsulamento
 */

//classe modelo
class Pessoa {
    //atributos
    constructor(nome, idade) {
        this.nome = nome //variável pública
        let _idade = idade//let_idade (encapsular a variável)
        //métodos get e set (para acessar a variável idade)
        this.getIdade = () => { // function ou =>
            return _idade
        }
        this.setIdade = function (novaIdade) {
            _idade = novaIdade
        }
        //----------------------------------------------------
    }
    //métodos (ações)
    apresentar() {
        console.log(`olá,meu nome é ${this.nome} e tenho ${this.getIdade ()} anos.`)

    }
}
console.clear()
/**
 * instanciar(criar) objetos ***/

const pessoa1 = new Pessoa("vinicius", 37);
pessoa1.apresentar()
pessoa1.setIdade(40)
pessoa1.apresentar()
