//unir 2 objetos
const producto = {
    nombre: "Guitarra",
    precio: 300,
    disponuble: true
}

const cliente = {
    nombre: "Mijael",
    premium: true
}

const newObject = {
    producto: {...producto},
    cliente: {...cliente}
}


console.log(newObject)
console.log(cliente)
console.log(producto)