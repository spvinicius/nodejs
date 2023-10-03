/**
 * POO - Fundamentos da Programação Orientada a Objetos
 * Exemplo: jogo Minecraft
 */

// Classe modelo (abstração)
class Bloco {

    // Classe Atributos
    constructor(resistencia, textura) {
        this.resistencia = resistencia
        this.textura = textura

    }
    //Classe ações (métodos)
    criarBloco() {
        console.log("------------------------------------")
        console.log("┌──────┐")
        console.log("│      │")
        console.log("│      │")
        console.log("└──────┘")
        console.log(`Bloco de ${this.textura}`)
        console.log(`Bloco de ${this.resistencia}`)
    }
    construir() {
        console.log(`Bloco de ${this.textura} colocado`)
    }

    minerar() {
        console.log("☐ ☐ ☐ Recursos obtidos!")
    }

    queimar(){
        console.log("🔥🔥🔥 Queimando recurso")
    }

}

//Classe modelo com herança(extends)
class Enxada extends Bloco {
    //atributos
    constructor(resistencia, textura, conquista) {
        super(resistencia, textura)
        this.conquista = conquista
    }

    //métodos
    criarEnxada(){
        console.log("------------------------------------")
        console.log("⛏⛏⛏")
        console.log(`Enxada de ${this.textura}`)
        console.log(`resistencia: ${this.resistencia}`)
    }
    arar(){
        console.log(",_,_,_, Terra arada!")
        if (this.conquista === true) {
            console.log("⭐🤠⭐ conquista obtida!")
        }
    }

//polimorfismo
minerar() {
    console.log("⚔ DANO atribuido")
}

}

// Criar de objetos (Mundo)
console.clear()
console.log("███    ███ ██ ███    ██ ███████  ██████ ██████   █████  ███████ ████████")
console.log("██ ████ ██ ██ ██ ██  ██ █████   ██      ██████  ███████ █████      ██    ")
console.log("██  ██  ██ ██ ██  ██ ██ ██      ██      ██   ██ ██   ██ ██         ██    ")
console.log("██      ██ ██ ██   ████ ███████  ██████ ██   ██ ██   ██ ██         ██    ")

// Criando um Bloco de Terra 
// new (novo objeto)
// Bloco (classe modelo(resistencia, textura))
const bloco1 = new Bloco(1, "terra")
bloco1.criarBloco()

// Criando um blocode madeira
const bloco2 = new Bloco(4, "madeira")
bloco2.criarBloco()
bloco2.construir()

// Criando bloco de pedra
const bloco3 = new Bloco(8, "pedra")
bloco3.criarBloco()
bloco3.minerar()

//criando bloco de diamante
const bloco4 = new Bloco(16, "ouro")
bloco4.criarBloco()
bloco4.minerar()
bloco4.queimar()

// criando uma Enxada de madeira
const Enxada1 = new Enxada(4, "madeira", false)
Enxada1.criarEnxada()
Enxada1.arar()
Enxada1.arar()

// criando uma Enxada de ferro
const Enxada2 = new Enxada(21, "ferro", true)
Enxada2.criarEnxada()
Enxada2.arar()
Enxada2.arar()

// criando uma Enxada de diamante
const Enxada3 = new Enxada(25, "Diamante", false)
Enxada3.criarEnxada()
Enxada3.arar()
Enxada3.arar()