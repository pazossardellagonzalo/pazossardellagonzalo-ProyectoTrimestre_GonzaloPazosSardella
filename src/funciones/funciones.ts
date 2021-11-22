import { Marcas, oMarca} from "../Schemas/schemaMarca";
import { tiposCalzados, otipoCalzado } from "../Schemas/schematipoCalzado";
import { Calzados, oCalzado } from "../Schemas/schemaCalzados";
import { Cliente } from "../classes/Cliente";
import { Extranjero } from "../classes/Extranjero";
import { Clientes, iCliente, iExtranjero, iSocio } from "../Schemas/schemaCliente";
import { db } from "../database/database";
import { leerTeclado } from "../util/leerTeclado";
import { Socio } from "../classes/Socio";
import { Collection, Mongoose } from "mongoose";
import { Console } from "console";
import { Marca } from "../classes/Marcas";
import { tiposCalzado } from "../classes/tipoCalzado";
import { Calzado } from "../classes/Calzado";
import { Pedido } from "../classes/Pedido";
import { iPedido, Pedidos } from "../Schemas/schemaPedidos";

export let creacionCliente = async () => {
  await db.conectarBD()
  let cliente: Cliente | any

  let sSchema: any
  let oSchema: iExtranjero = {
    _id: null,
    _DNI: null,
    _nombre: null,
    _apellidos: null,
    _pais: null,
    _extranjero: null
  }
  let ooSchema: iSocio = {
    _id: null,
    _DNI: null,
    _nombre: null,
    _apellidos: null,
    _pais: null,
    _socio: null
  }

  const DNI = parseInt(await leerTeclado("DNI"))
  const Nombre = await leerTeclado("Nombre")
  const Apellidos = await leerTeclado("Apellido")
  const pais = await leerTeclado("País")
  const extranjero = await leerTeclado("Eres extranjero S/N")

  if (extranjero == "S") {
    let extranjero = true
    let acliente = new Extranjero(DNI, Nombre, Apellidos, pais, extranjero)
    oSchema._DNI = acliente.DNI
    oSchema._nombre = acliente.Nombre
    oSchema._apellidos = acliente.Apellidos
    oSchema._pais = acliente.Pais
    oSchema._extranjero = acliente.extranjero
    sSchema = new Clientes(oSchema)
    await sSchema.save()
  } else {
    const socio = await leerTeclado("Quieres ser socio S/N")
    if (socio == "S") {
      let socio = true
      let bcliente = new Socio(DNI, Nombre, Apellidos, pais, socio)
      ooSchema._DNI = bcliente.DNI
      ooSchema._nombre = bcliente.Nombre
      ooSchema._apellidos = bcliente.Apellidos
      ooSchema._pais = bcliente.Pais
      ooSchema._socio = bcliente.Socio
      sSchema = new Clientes(ooSchema)
      await sSchema.save()
    } else {
      let socio = false
      let bcliente = new Socio(DNI, Nombre, Apellidos, pais, socio)
      ooSchema._DNI = bcliente.DNI
      ooSchema._nombre = bcliente.Nombre
      ooSchema._apellidos = bcliente.Apellidos
      ooSchema._pais = bcliente.Pais
      ooSchema._socio = bcliente.Socio
      sSchema = new Clientes(ooSchema)
      await sSchema.save()
    }
  } return cliente
}

export let creacionMarca = async () => {
  await db.conectarBD()
  let amarca: Marca | any

  let sSchema: any
  let oSchema: oMarca = {
    _id : null,
    _marca : null,
    _precioExtra : null,
    _descuento : null
  }

  console.log("Marcas disponibles: Nike, Adidas, Balenciaga o Puma")
  const marca = await leerTeclado("Marca")
  console.log("Deme un precio Extra")
  const precioExtra = parseFloat(await leerTeclado("Precio extra"))
  console.log("Deme un descuento")
  const descuento = parseInt(await leerTeclado("Descuento"))

  oSchema._marca = marca;
  oSchema._precioExtra = precioExtra;
  oSchema._descuento = descuento;
  sSchema = new Marcas(oSchema)
  await sSchema.save()
  return amarca
}

export let creaciontipoCalzado = async () => {
  await db.conectarBD()
  let aTipoCalzado: tiposCalzado | any

  let sSchema: any
  let oSchema: otipoCalzado = {
    _id : null,
    _marca : null,
    _precioExtra : null,
    _descuento : null,
    _tipo : null
  }

  const tipo = await leerTeclado("Ingrese un tipo de calzado")
  const marca = await leerTeclado("Ingrese una marca")
  let query: any = await Marcas.findOne({ _marca : marca })
  if (query != null) {
    const precioExtra = query._precioExtra
    const descuento = query._descuento

    let aTipoCalzado = new tiposCalzado(marca,precioExtra,descuento,tipo)
    oSchema._marca = aTipoCalzado.marca
    oSchema._precioExtra = aTipoCalzado.precioExtra
    oSchema._descuento = aTipoCalzado.descuento
    oSchema._tipo = aTipoCalzado.tipo
    sSchema = new tiposCalzados(oSchema)
    await sSchema.save()
  } else {
    console.log("Ingrese una marca valida")
  } return aTipoCalzado
}

export let creacionCalzado = async () => {
  await db.conectarBD()
  let aCalzado: Calzado | any

  let sSchema: any
  let oSchema: oCalzado = {
    _id : null,
    _tipo : null,
    _marca : null,
    _precioExtra : null,
    _descuento : null,
    _talla : null,
    _color : null,
    _precio : null,
    _cBarra : null
  }

  const marca = await leerTeclado("Ingrese marca")
  const tipo = await leerTeclado("Ingrese tipo")
  let query: any = await tiposCalzados.findOne({ "$and":[{ _tipo : tipo }, { _marca : marca}]})
  if (query != null) {
      const precioExtra = query._precioExtra
      const descuento = query._descuento
      const marca = query._marca
      const talla = parseInt(await leerTeclado("Ingrese la talla del calzado"))
      const color = await leerTeclado("Ingrese color para el calzado")
      const precio = parseInt(await leerTeclado("Ingrese un precio para el calzado"))
      const cBarra = parseInt(await leerTeclado("Ingrese el codigo de barras"))
      let aCalzado = new Calzado(marca,precioExtra,descuento,tipo,talla,color,precio,cBarra)
      oSchema._precioExtra = aCalzado.precioExtra
      oSchema._descuento = aCalzado.descuento
      oSchema._marca = aCalzado.marca
      oSchema._talla = aCalzado.talla
      oSchema._color = aCalzado.color
      oSchema._tipo = aCalzado.tipo
      oSchema._precio = aCalzado.calcularPrecio()
      oSchema._cBarra = aCalzado.cBarra
      sSchema = new Calzados(oSchema)
      await sSchema.save()
  } else {
      console.log("Ingrese un tipo valido")
  } return aCalzado
}

export let calzadosDisponibles = async () => {
  await db.conectarBD()
  let query: any = await Calzados.find()
  if (query != null) {
    console.log(query)
  } else {
    console.log("No existen productos")
  }
}

export let busquedaCliente = async () => {
  await db.conectarBD()
  const DNI = parseInt(await leerTeclado("Ingrese su DNI"))
  let query: any = await Clientes.findOne({ _DNI: DNI })
  if (query != null) {
    console.log(query)
  } else {
    console.log("Este DNI no existe")
  }
}

export let busquedaCalzado = async () => {
  await db.conectarBD()
  const cBarra = parseInt(await leerTeclado("Ingrese codigo de barras"))
  let query: any = await Calzados.findOne({ _cBarra: cBarra })
  if (query != null) {
    console.log(query)
  } else {
    console.log("Este codigo de barras no existe")
  }
}

export let borrarCliente = async () => {
  await db.conectarBD()
  const DNI = parseInt(await leerTeclado("Ingrese su DNI"))
  let query: any = await Clientes.findOne({ _DNI: DNI })
  console.log(query)
  if (query != null) {
    console.log(query._id) 
    // Borro utilizando el campo ID, ya que existe el indice creado por mongoose para _id 
    Clientes.deleteOne({ _id: query._id }).then(function () { 
      console.log("Objeto borrado correctamente")
    }).catch(function (error) {
      console.log(error)
    })
  } else {
    console.log("Ese DNI no existe")
  }
}

export let borrarCalzado = async () => {
  await db.conectarBD()
  const cBarra = parseInt(await leerTeclado("Ingrese codigo de barras"))
  let query: any = await Calzados.findOne({ _cBarra: cBarra })
  console.log(query)
  if (query != null) {
    console.log(query._id) 
    // Borro utilizando el campo ID, ya que existe el indice creado por mongoose para _id 
    Calzados.deleteOne({ _id: query._id }).then(function () { 
      console.log("Objeto borrado correctamente")
    }).catch(function (error) {
      console.log(error)
    })
  } else {
    console.log("Ese DNI no existe")
  }
}

export let crearPedido = async () => {
  await db.conectarBD()
  let aPedido : Pedido | any

  let sSchema: any
  let oSchema: iPedido = {
    _ID: null,
    _nPedido: null,
    _objetos: [],
    _fecha: null,
    _idCliente: null,
    _importeTotal: null
  }

  const DNI = parseInt(await leerTeclado("Ingrese su DNI"))
  let queryC: any = await Clientes.findOne({ _DNI: DNI })
  if (queryC != null){
    let objetos = []
    let importeTotal = 0
    while(true){
      const cBarra = await leerTeclado("Ingrese el codigo de barra del producto (0 para terminar)")
      let query: any = await Calzados.findOne({ _cBarra: cBarra })
      if(cBarra != "0"){
        if (query != null){
          const cantidad = parseInt(await leerTeclado("Ingrese la cantidad de este producto"))
          objetos.push({ "objectID": query._id, "Marca": query._marca , "Tipo": query._tipo, "Talla": query._talla, "Color": query._color ,"Precio": query._precio, "Cantidad": cantidad })
          importeTotal += query._precio * cantidad
        } else {
          console.log("Objeto inexistente, ingrese un válido")
        }
      } else {
        const con = await leerTeclado("¿Quiere confirmar el pedido? S/N")
        if(con == "S"){
          const nPedido = Math.floor(Math.random() * (10000 - 1 + 1)) + 1;
          const fecha = new Date()
          const idCliente = queryC._id
          let aPedido = new Pedido(nPedido,objetos,fecha,idCliente,importeTotal)
          const darnPedido = await leerTeclado("Tu numero de pedido es: " + nPedido)
          oSchema._nPedido = aPedido.nPedido
          oSchema._objetos = aPedido.objetos
          oSchema._fecha = aPedido.fecha
          oSchema._idCliente = aPedido.idCliente
          oSchema._importeTotal = aPedido.importeTotal
          sSchema = new Pedidos(oSchema)
          await sSchema.save() 
        } else {
          console.log("Pedido no creado")
        }
        break
      }
    }
  }
}

export let borrarPedido = async () => {
  await db.conectarBD()
  const nPedido = parseInt(await leerTeclado("Ingrese el numero de pedido"))
  let query: any = await Pedidos.findOne({ _nPedido: nPedido })
  console.log(query)
  if (query != null) {
    console.log(query._id) 
    // Borro utilizando el campo ID, ya que existe el indice creado por mongoose para _id 
    Pedidos.deleteOne({ _id: query._id }).then(function () { 
      console.log("Objeto borrado correctamente")
    }).catch(function (error) {
      console.log(error)
    })
  } else {
    console.log("Ese pedido no existe")
  }
}

export let busquedaPedido = async () => {
  await db.conectarBD()
  const DNI = parseInt(await leerTeclado("Ingrese su DNI"))
  let query: any = await Clientes.findOne({ _DNI: DNI })
  if (query != null) {
    const tipoCon = await leerTeclado("¿Quiere ver un pedido especifico o todos? E/T")
    if (tipoCon == "T"){
      let query: any = await Pedidos.find()
      console.log(query)
    } else {
      const nPedido = parseInt(await leerTeclado("Ingrese numero de pedido"))
      let queryP: any = await Pedidos.findOne({ _nPedido : nPedido })
      if (queryP != null){
        console.log(queryP)
      }else {
        console.log("El pedido no existe")
      }
    }
  } else {
    console.log("Este DNI no existe")
  }
}