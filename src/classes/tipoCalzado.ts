import { Marca } from "./Marcas"

export class tiposCalzado extends Marca {
    protected _tipo : string

    constructor (_marca: string, _precioExtra: number, _descuento: number, _tipo: string){
        super(_marca, _precioExtra, _descuento)
        this._tipo = _tipo
    }

    public get tipo(){
        return this._tipo
    }

}