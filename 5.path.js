const path = require('node:path')

// Barra separadora segun SO
console.log(path.sep)

// Unir rutas con path.join
const filePath = path.join('./content', 'subfolder', 'test.txt')
console.log(filePath)

// te devuelve el nombre de un archivo
const base = path.basename('./archivo.txt')
console.log(base)

// te devuelve el nombre del archivo sin la extension .txt
const filename = path.basename('./archivo.txt', '.txt')
console.log(filename)

// te devuelve la extension del archivo
const extension = path.extname('./archivo.txt')
console.log(extension)