import { Summary } from "../code/InterfaceInheritance"

describe('Interface Inheritance', () => { 
    it("should support class that implement inheritance as contract", ()=>{
        const itemA = new Summary(5,6)
        console.info(itemA.AddNumber())
        expect(itemA.AddNumber()).toBe(11)
        console.info(itemA.SubstractNumber())
        expect(itemA.SubstractNumber()).toBe(-1)
    })
 })