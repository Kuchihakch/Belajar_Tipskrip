import { Animal, Cat, Dog } from "../code/Animal"

describe('Animal Class', () => { 
    it("Should support Abstraction and inheritance for derived class", ()=>{
        const kucing = new Cat('mocha')
        kucing.makeSound()
        kucing.play()
        const anj = new Dog('bob')
        anj.makeSound()
        anj.play()
    })
    it("should support type guard", ()=>{
        const creatures: Animal[] = [
            new Dog('bob'), new Dog('puppy'), new Cat('kitty')
        ]
        function checkIsDog(v: Animal): v is Dog{
            if(v instanceof Dog){
                return true
            }else{
                return false
            }
        }
        const isDog = creatures.filter(checkIsDog)
        expect(isDog).toHaveLength(2)
        console.log(isDog)
        // isDog.forEach(i => i.makeSound)
    })
 })