//SELECTORES DEL DOM

const heading = document.querySelector('.heading')

console.log(heading)
console.log(heading.textContent)
console.log(heading.tagName)
console.log(heading.classList)
console.log(heading.id)
//solo selecciona 1 y si so varios selecciona el primero, ejm
// const enlaces = document.querySelector('.navegacion a')
// console.log(enlaces)

//Query selector all
const enlaces = document.querySelectorAll('.navegacion a')
console.log(enlaces)