//Otros Array Methods Utiles
const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js']
const numeros = [10, 20, 30]

let nuevoArray;

//Comprobar si un elemento existe en el array
// const resultado = tecnologias.includes('React')

//some - devuelve true si algun elemento cumple con la condicion
// const resultado = numeros.some(numero => numero > 15)

//Find - Devuelve el primer elemento q cumple la condicion
// const resultado = numeros.find(numero => numero > 15)

//Every - Retorna true o false si todos cumplen la condicion
// const resultado = numeros.every(numero => numero > 5)

//reduce - Acumula en el total
// const resultado = numeros.reduce((total, numero)=> numero + total, 0)

//forEach Cuando solo quiera iterar no devuelve un nuevo arreglo
// tecnologias.forEach((tech, index) => console.log(index, tech))

// let num = 0;
// numeros.forEach(tech => num += tech)
// console.log(num)

//Filter - Crea un nuevo array en base a una condicion
// const resultado = tecnologias.filter( tech => tech !== 'Node.js')
// const resultado = numeros.filter( tech => tech > 15)

//Map - crea un nuevo array con elementos que pueden ser transformados
const arrayMap = tecnologias.map(tech => 
    tech === 'HTML' || tech === 'CSS' ? 'basico':'intermedio')

console.log(arrayMap)
