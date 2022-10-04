//Objetos - Desctructuring con 2 o más objetos
const producto = {
    nombre: "Guitarra",
    precio: 300,
    disponible: true
}

const cliente = {
    nombre: "Mijael",
    premium: true
}

const { nombre, precio, disponible } = producto
const { nombre: nombreCliente, premium} = cliente

console.log(nombre, precio, disponible)
console.log(nombreCliente, premium)