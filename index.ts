import { Calzado } from "./src/classes/Calzado";
import { borrarCalzado, borrarCliente, borrarPedido, busquedaCalzado, busquedaCliente, creacionCalzado, creacionCliente, creacionMarca, creaciontipoCalzado, crearPedido, calzadosDisponibles, busquedaPedido} from "./src/funciones/funciones"
import { leerTeclado } from "./src/util/leerTeclado"; 
import { menu }  from "./src/util/menu";


let main = async () => {

  while(1) {
  let opcion = parseInt(await menu())

  switch (opcion) {
    case 1:
      await creacionCliente()
    break;
    case 2:
      await creacionMarca()
    break;
    case 3:
      await creaciontipoCalzado()
    break; 
    case 4:
      await creacionCalzado()
    break;
    case 5:
      await calzadosDisponibles()
    break;
    case 6:
      await busquedaCliente()
    break;
    case 7:
      await busquedaCalzado()
    break;
    case 8:
      await borrarCliente()
    break;
    case 9:
      await borrarCalzado()
    break;
    case 10:
      await crearPedido()
    break;
    case 11:
      await borrarPedido()
    break;
    case 12:
      await busquedaPedido()
    break;

  }

  console.log("")
  console.log(`Pulse enter para continuar`)
  await leerTeclado ('')
  console.log(` `)
}
}

main()