const http = require('node:http')
const { findAvailablePort } = require('./10.free-port.js')

const desiredPort = process.env.PORT ?? 3000

const server = http.createServer((req, res) => {
  console.log('request recibida')
  res.end('Hola mundo')
})
// Esto llama a mi funcion del archivo free-port y lo que está haciendo es
// yo quiero utilizar el puerto 3000 pero en el caso de que no estuviese disponible
// se va a encargar de refrescar este numero sumandole 1 hasta encontrar un puerto que si esté disponible
findAvailablePort(desiredPort).then(port => {
  server.listen(port, () => {
    console.log(`servidor escuchando en el puerto http://localhost:${port}`)
  })
})

// Si quieres que coja un puerto disponible no recomendable para produccion
// server.listen(0, () => {
//   console.log(`servidor escuchando en el puerto http://localhost:${server.address().port}`)
// })

// Esto es si quieres un puerto en concreto
// server.listen(3000, () => {
//   console.log('servidor escuchando en el puerto 3000')
// })
