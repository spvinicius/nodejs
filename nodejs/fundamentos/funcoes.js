/**
 * estudo das funções
 * funções simples sem parãmetros ou retorno
 */

//função simples
function hello() {
    console.log("hello function")
}

//para executar uma função basta escrever o nome da função
hello()

// funções atribuidas
const hello2 = function() {
    console.log("Hello function atribuida")

}

hello2()

// função atribuida simplificada (arrow function)
const hello3 = () => {
    console.log("Hello arrow function")
    
}

hello3()

    console.log(typeof(hello3))
