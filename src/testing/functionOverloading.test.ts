describe('Function Overloading', () => { 
    it("Should support function Overloading for same function but it's params type and return type is different", ()=>{
        function overloading(v: string):string
        function overloading(v: number): number
        //overload with any/unknown type, then validate
        function overloading(v:any):any{
            if(typeof v === 'string'){
                return v.toUpperCase()
            }
            if(typeof v === 'number'){
                return Math.pow(v, 2)
            }
        }
        expect(overloading(5)).toBe(25)
        expect(overloading("felienz")).toBe("FELIENZ")
        //invalid case -> even with any/unknown type if noone matches with overloaded fn
        // overloading(10<2)
    })
 })