const fs = require('node:fs/promises')
const path = require('node:path')
const picocolors = require('picocolors')

// Le pasamos la carpeta en la que queremos que haga el dir
const folder = process.argv[2] ?? '.'

// const fs = require('node:fs')
// fs.readdir(folder, (err, files) => {
//     if(err) {
//         console.log('Error al leer el directorio: ', err)
//         return;
//     }

//     files.forEach(file => {
//         console.log(file)
//     })
// })

// EJEMPLO HECHO CON PROMESAS
async function ls (folder) {
// files puede petar, asi que lo metemos en un try catch y con dios
  let files
  try {
    files = await fs.readdir(folder)
  } catch {
    console.error(picocolors.red(`No se ha podido leer el directorio ${folder}`))
    // salimos de manera controlada con el process.exit[1]
    process.exit(1)
  }

  // vamos a crear todas las promesas de los archivos
  // para ello vamos a mapear todos los archivos
  // con esto vamos a recuperar toda la uinformacion de los archivos a traves del stat
  const filesPromises = files.map(async file => {
    const filePath = path.join(folder, file)
    let stats
    try {
      stats = await fs.stat(filePath) // esto devuelve la informacion del archivo con stat
    } catch {
      console.error('no se pudo leer el archivo')
    }

    // comprobamos si es un directorio, el tamaño el tipo, cuando se ha modificado
    const isDirectory = stats.isDirectory()
    const fileType = isDirectory ? 'd' : 'f'
    const fileSize = stats.size
    const fileModified = stats.mtime.toLocaleString()

    return `${fileType} ${picocolors.blue(file.padEnd(20))} ${fileSize.toString().padStart(10)} ${fileModified}` // esto se llama template string sirve para pasar las variables entre ``
  })

  // esperamos todas las promesas y las resolvemos creamos una constante para ello y le pasamos la funcion que tenga las promesas el filesPromises
  const filesInfo = await Promise.all(filesPromises)

  // ahora tenemos toda la informacion en filesInfo de todos los archivos por ende para sacar uno a uno lo metemos en el bucle for
  filesInfo.forEach(fileinfo => console.log(fileinfo))
}

ls(folder)

// node 8.ls-advanced.js ./cjs
// este seria el comando para buscar en una carpeta en concreto
// a través de la variable folder nosotros le pasamos la carpeta que queremos inspeccionar por eso en el terminal pòdemos poner el ./cjs
// porque en la funcion tenemos que recibe un objeto folder que nosotros anteriormente ya definimo
