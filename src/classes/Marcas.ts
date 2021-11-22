export class Marca{
    protected _marca: string
    protected _precioExtra: number
    protected _descuento: number
    
    constructor(_marca: string, _precioExtra: number,_descuento : number){
        this._marca = _marca
        this._precioExtra = _precioExtra
        this._descuento = _descuento
    } 
    
    public get marca(){
        return this._marca
    }

    public get precioExtra(){
        return this._precioExtra
    }    

    public get descuento(){
        return this._descuento
    }
            
}