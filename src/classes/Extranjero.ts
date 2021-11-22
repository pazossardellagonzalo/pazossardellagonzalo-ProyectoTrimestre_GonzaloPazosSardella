import { Cliente } from "./Cliente"

export class Extranjero extends Cliente {
    protected _extranjero: boolean

    constructor (_DNI: number, _nombre: string, _apellidos: string, _pais: string, _extranjero: boolean){
        super (_DNI, _nombre, _apellidos, _pais)
        this._extranjero = _extranjero
    }

    public get extranjero(){
        return this._extranjero
    }

}