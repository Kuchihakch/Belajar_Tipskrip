import { Cat, Dog } from "../code/Animal"

describe('Animal Class', () => { 
    it("Should support Abstraction and inheritance for derived class", ()=>{
        const kucing = new Cat('mocha')
        kucing.makeSound()
        kucing.play()
        const anj = new Dog('bob')
        anj.makeSound()
        anj.play()
    })
 })