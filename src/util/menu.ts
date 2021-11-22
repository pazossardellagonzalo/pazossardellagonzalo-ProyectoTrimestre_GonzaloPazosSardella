import { leerTeclado } from '../util/leerTeclado'

export const menu = async () => {
console.log ("1- Crear cliente")
console.log ("2- Crear marca")
console.log ("3- Creacion tipo calzado")
console.log ("4- Creacion calzado")
console.log ("5- Calzados disponibles")
console.log ("6- Busqueda cliente")
console.log ("7- Busqueda calzado")
console.log ("8- Borrar cliente")
console.log ("9- Borrar calzado")
console.log ("10- Crear pedido")
console.log ("11- Borrar pedido")
console.log ("12- Busqueda de pedido")
console.log (" ")
let opcion = await leerTeclado(``)
console.log(" ")
return opcion
}