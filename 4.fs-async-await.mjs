// Esta es la forma asincrona de leer un archivo
import { readFile } from 'node:fs/promises'

// Esta es la forma de pasar callback a promesas, solo usarlo en los modulos activos
// que no tienen promesas nativas

// const { promisify } = require('node:util')
// const readFilePromise = promisify(fs.readFile)

// Una manera de usar el await es usando el ES modules es decir la extension .mjs
// estos tienen el soporte de usar await en el cuerpo del archivo, esto se llama top level await, es decir

console.log('Este es el primer archivo.....')
console.log('-------------------------------------')
// ahora la funcion readFile nos permite realizar una promesa en lugar de los callback
const text = await readFile('./archivo.txt', 'utf-8')
console.log('primer texto', text)

console.log('Ejecutando a la vez que las llamadas asyncronas de manera no secuencial, vamos que no espero a las funciones')

console.log('Este es el segundo archivo.....')
console.log('-------------------------------------')
const secondText = await readFile('./archivo2.txt', 'utf-8')
console.log('segundo texto', secondText)
