// argumentos de entrada
console.log(process.argv)

// controlar el proceso y su salida
// process.exit(1)

// // podemos controlar eventos del proceso
// process.on('exit', () => {
//     // limpiar recursos
// })

// current working directory
console.log(process.cwd())

// util para saber por ejemplo cuando estamos o en prod o en desarrollo
console.log(process.env.NODE_ENV)
