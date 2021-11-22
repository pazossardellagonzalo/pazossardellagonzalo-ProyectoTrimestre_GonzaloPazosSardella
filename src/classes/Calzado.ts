import { tiposCalzado } from "./tipoCalzado"

export class Calzado extends tiposCalzado {
    protected _talla: number
    protected _color: string
    protected _precio: number
    protected _cBarra: number


    constructor (_marca: string, _precioExtra: number, _descuento: number, _tipo: string, _talla: number, _color: string, _precio: number, _cBarra : number){
        super(_marca, _precioExtra, _descuento, _tipo)
        this._talla = _talla
        this._color = _color
        this._precio = _precio
        this._cBarra = _cBarra
    }

    public get talla(){
        return this._talla
    }

    public get color(){
        return this._color
    }

    public get precio(){
        return this._precio
    }

    get cBarra(){
        return this._cBarra
    }

    public calcularPrecio() {
        this._precio += this._precioExtra
        if(this._descuento == 0) {
            return this._precio;
        }
        return this._precio - Math.trunc(this._precio * this._descuento / 100)
    }

}