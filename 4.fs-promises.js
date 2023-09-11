// Esta es la forma asincrona de leer un archivo
const fs = require('node:fs/promises')

console.log('Este es el primer archivo.....')
console.log('-------------------------------------')
// ahora la funcion readFile nos permite realizar una promesa en lugar de los callback
fs.readFile('./archivo.txt', 'utf-8')
  .then(text => {
    console.log('primer texto:', text)
  })


console.log('Ejecutando a la vez que las llamadas asyncronas de manera no secuencial, vamos que no espero a las funciones')

console.log('Este es el segundo archivo.....')
console.log('-------------------------------------')
fs.readFile('./archivo2.txt', 'utf-8')
  .then(text => {
    console.log('segundo texto:', text)
  })
