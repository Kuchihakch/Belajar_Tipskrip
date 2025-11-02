import type { Calculator } from "../code/calculatorInterface"

describe('Calculator Interface', () => { 
    it("Should do Calculations and return number", ()=>{
        const operations: Calculator = {
            add: (a,b) => a + b,
            sub: (a,b) => a - b
        }
        expect(operations.add(10, 5)).toBe(15)
        expect(operations.sub(10,5)).toBe(5)
    })
 })