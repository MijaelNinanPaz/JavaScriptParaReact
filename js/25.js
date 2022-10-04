//Eventos del DOM - Inputs
const inputNombre = document.querySelector('.nombre')
console.log(inputNombre)

// inputNombre.addEventListener('keydown', function() {
//     console.log('presionando una tecla en el input')
// })

// inputNombre.addEventListener('keydown', function() {
//     console.log('presiona y levantando una tecla en el input')
// })

//Captura todos los eventos - input
// inputNombre.addEventListener('input', function() {
//     console.log('escribiendo en el input')
//     console.log(inputNombre.value)
// })

//Capturar el evento
inputNombre.addEventListener('input', function(e) {
    console.log(e.target.value)
})

const inputPassword = document.querySelector('.password')
inputPassword.addEventListener('input', () => {
    inputPassword.type = 'text'
    setTimeout(() => {
        inputPassword.type = 'password'
    }, 1000)
})
