// Esta es la forma sincrona de leer un archivo
const fs = require('node:fs')

// console.log('Este es el primer archivo.....')
// console.log('-------------------------------------')
// const text = fs.readFileSync('./archivo.txt', 'utf-8')

// console.log(text)

// console.log('Este es el segundo archivo.....')
// console.log('-------------------------------------')
// const secondText = fs.readFileSync('./archivo2.txt', 'utf-8')

// console.log(secondText)

// Esta es la forma Asyncrona de leer archivos

console.log('Este es el primer archivo.....')
console.log('-------------------------------------')
// ahora la funcion readFile acepta como tercer paramtro un callback
const text = fs.readFile('./archivo.txt', 'utf-8', (err, text) =>{
    console.log(text)
})

console.log('Ejecutando a la vez que las llamadas asyncronas de manera no secuencial, vamos que no espero a las funciones')

console.log('Este es el segundo archivo.....')
console.log('-------------------------------------')
const secondText = fs.readFile('./archivo2.txt', 'utf-8', (err, text) => {
    console.log(text)
})
// <-------------- El output ------------------->

// Este es el primer archivo.....
// -------------------------------------
// Ejecutando a la vez que las llamadas asyncronas de manera no secuencial, vamos que no espero a las funciones
// Este es el segundo archivo.....
// -------------------------------------
// Hola mundo
// Ñata the miataa
// Ñata the miataa
// Ñata the miataa
// Ñata the miataa
// Ñata the miataa
// Ñata the miataa
