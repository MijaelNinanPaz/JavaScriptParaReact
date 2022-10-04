//Fetch API - Async Await

const url = "https://jsonplaceholder.typicode.com/comments"

const consultarAPIAsync = async () => {
    const respuesta = await fetch(url)
    console.log(respuesta)
    console.log('despues de respuesta')
    const resultado = await respuesta.json()
    console.log(resultado)
    console.log('despues de resultado')
}

consultarAPIAsync();