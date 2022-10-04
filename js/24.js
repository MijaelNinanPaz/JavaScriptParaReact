//Eventos del DOM - Clicks

const heading = document.querySelector('#heading')
heading.addEventListener('click', () => {
    heading.textContent = 'Nuevo Heading al dar Click'
})

const enlaces = document.querySelectorAll('.navegacion a')
enlaces.forEach(enlace => enlace.addEventListener('click', () => {
    enlace.textContent = 'Camié :"3'
}))

