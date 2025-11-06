export class Category{
    _name?: string

    get name(): string{
        if(this._name){
            return this._name
        }else{
            return 'name isEmpty'
        }
    }
    set name(v: string){
        if(v !== ''){
            this._name = v
        }
    }
}