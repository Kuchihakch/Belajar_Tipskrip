export class Person{
    private password: string = ''
    constructor(public name:string, protected email: string){}
    protected set personEmail(v: string){
        v !== '' ? this.email = v : ''
    }//protected -> akses parent - child
    get personInfo():string{
        return `[Person Info]: ${this.name}, email: ${this.email}, password: ${this.password}`
    }
    set personPassword(v: string){
        v !== '' ? this.password = v : ''
    }
}