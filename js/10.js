//Destructuring de Arrays
const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js']

const [, , , , nodejs] = tecnologias
console.log(nodejs)

//separar el primero en variable first
//y los otros en un nuevo arreglo others

const [first, ...others] = tecnologias
console.log(first) // 'HTML'
console.log(nodejs) // [...others]