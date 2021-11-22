export class Cliente{
    protected _DNI: number
    protected _nombre: string
    protected _apellidos: string
    protected _pais: string

    constructor (_DNI: number, _nombre: string, _apellidos: string, _pais: string){
        this._DNI = _DNI
        this._nombre = _nombre
        this._apellidos = _apellidos
        this._pais = _pais
    }

    public get DNI(){
        return this._DNI
    }

    public get Nombre(){
        return this._nombre
    }

    public get Apellidos(){
        return this._apellidos
    }

    public get Pais(){
        return this._pais
    }

}
