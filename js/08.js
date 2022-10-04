//Arrays o Arreglos
const tecnologies = [20, 30, true, 'React', 'javascript']

//Operaciones
const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js']

//AÑADIR ELEMENTOS AL ARRAY
// tecnologias.push('GraphQL') //(NO) Añade al final del array
// tecnologias.unshift('GraphQL') //(NO) Añade al inicio

// const newArray = [...tecnologias, 'GraphQL']
const newArray = ['GraphQL', ...tecnologias]

//ELIMINAR ELEMENTOS DEL ARRAY
//tecnologias.pop() //(NO) elimina del final del array
//tecnologias.shift() //(NO)Elimina del inicio
//tecnologias.splice(2,1) //(NO)elimina de una posiccion y una cantidad

const nuevoArray = tecnologias.filter( function(tech){
    return tech !== 'Node.js'
})

//REEMPLAZAR DEL ARRAY
// tecnologias[0] = 'GraphQL' //No porque modifica el arreglo original
const nuevoArreglo = tecnologias.map( function(tech){
    if(tech === 'HTML') {
        return 'GraphQL'
    } else {
        return tech
    }
})

console.table(tecnologias)
console.table(nuevoArreglo)
