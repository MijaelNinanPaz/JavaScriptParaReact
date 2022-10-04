//FUNCIONES - ARROW FUNCTIONS

//Function Expression
// const sumar = function() {
//     console.log(2 + 2)
// }
// sumar()

//Arrow Functions
// const sumar  = (numero = 0, numero2 = 0) => {
//     return numero + numero2
// }

// const sumar  = (numero = 0, numero2 = 0) => {
//     numero + numero2
// }
// const sumar  = (numero = 0, numero2 = 0) => numero + numero2

//cuando solo quieres enviar un parametro se puede elminar el parentesis
const sumar = numero => numero + 20
//en caso no reciba parametros se le invoca con parentesis si o si
const sumar2 = () => 2+2
const resultado = sumar(10)
console.log(resultado)