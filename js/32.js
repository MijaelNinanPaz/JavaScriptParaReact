// Template Strings
const producto = "Tablet de 12 pulgadas"
const precio = 400
const marca = "Orange"

function textoDeFuncion() {
    return "Este texto proviene de la función"
}
//Antes usaban asi
// console.log(producto + " $" + precio + " Dolares, Marca: " + marca )

//Ahora se usa template Strings y es mas cómodo
console.log(`${producto} $${precio} Dolares, Marca: ${marca}`)
console.log(`Este es otro ejemplo de template strings: ${textoDeFuncion()}`)