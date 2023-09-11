// Esta es la forma asincrona de leer un archivo
import { readFile } from 'node:fs/promises'

// Esto es en asyncrono paralelo es decir que los leemos a la misma vez
//  en el otro ejemplo los leemos de manera secuencial en asyncrono secuencial
Promise.all([
    readFile('./archivo.txt', 'utf-8'),
    readFile('./archivo2.txt', 'utf-8')
]).then(([text, secondText]) =>{
    console.log(text)
    console.log(secondText)
})
