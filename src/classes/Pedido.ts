export class Pedido{
    protected _nPedido: number
    protected _objetos: Array<any>
    protected _fecha: Date
    protected _idCliente: string
    protected _importeTotal: number

    constructor(_nPedido: number, _objetos: Array<any>, _fecha: Date, _idCliente: string, _importeTotal: number){
        this._nPedido = _nPedido
        this._objetos = _objetos
        this._fecha = _fecha
        this._idCliente = _idCliente
        this._importeTotal = _importeTotal
    }
    
    get nPedido(){
        return this._nPedido
    }
    
    get objetos(){
        return this._objetos
    }

    get fecha(){
        return this._fecha
    }

    get idCliente(){
        return this._idCliente
    }
    
    get importeTotal(){
        return this._importeTotal
    }

}