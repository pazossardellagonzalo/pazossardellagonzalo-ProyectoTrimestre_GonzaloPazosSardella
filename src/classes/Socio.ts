import { Cliente } from "./Cliente"

export class Socio extends Cliente {
    protected _socio: boolean

    constructor (_DNI: number, _nombre: string, _apellidos: string, _pais: string, _socio: boolean){
        super (_DNI, _nombre, _apellidos, _pais)
        this._socio = _socio
    }

    public get Socio(){
        return this._socio
    }

}