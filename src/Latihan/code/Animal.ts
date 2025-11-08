export abstract class Animal{
    abstract makeSound():void
}
interface Pet{
    name: string,
    play: ()=> void
}
export class Dog extends Animal implements Pet{
    name:string
    constructor(name: string){
        super()
        this.name = name
    }
    makeSound(): void {
        console.log ('Guk!')
    }
    play():void{
        console.log(`${this.name} sedang bermain`)
    };
}
export class Cat extends Animal implements Pet{
    name:string
    constructor(name: string){
        super()
        this.name = name
    }
    makeSound(): void {
        console.log ('Miaww!')
    }
    play():void{
        console.log(`${this.name} sedang bermain`)
    };
}