// Esta es la forma asincrona de leer un archivo
const { readFile } = require('node:fs/promises')

// Otra manera de usar await es a través de una función autoinvocada
// Es decir esto es una IIFE - Inmediatly Invoked Function Expression
// (() => {}

// )()

;(
    async () => {
console.log('Este es el primer archivo.....')
console.log('-------------------------------------')

const text = await readFile('./archivo.txt', 'utf-8')
console.log('primer texto', text)

console.log('Ejecutando a la vez que las llamadas asyncronas de manera no secuencial, vamos que no espero a las funciones')

console.log('Este es el segundo archivo.....')
console.log('-------------------------------------')
const secondText = await readFile('./archivo2.txt', 'utf-8')
console.log('segundo texto', secondText)
    }
)()


