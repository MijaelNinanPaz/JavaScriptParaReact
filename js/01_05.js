const producto = {
    nombre: "Guitarra",
    precio: 300,
    disponible: true
}
// Object.freeze(producto) --freeze no deja modificarlo
// Object.seal(producto) --Modifica propiedades, pero no permite añadir o eliminare la

//Deconstructuring
const {nombre, precio, disponible} = producto

//Object Literal Enhancement
const autenticado = true
const usuario = "Mijael"

const newObject = {
    autenticado,
    usuario
}

producto.nombre = "violin"
producto.imagen = "imagen.jpg"

delete producto.disponible
console.table(producto)
