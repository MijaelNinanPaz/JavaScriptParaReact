//FUNCIONES -FUNCTION EXPRESSION

//Funciones -Function Declaration
// function sumar(numero = 0, numero2 = 0) {
//     console.log(numero + numero2)
// }
//Funciones -Function Expression
//--a diferencia de function declaration la function expresion
//no se puede invocar antes de inicializarla
const sumar = function(numero = 0, numero2 = 0) {
    console.log(numero + numero2)
}
sumar(13,2)