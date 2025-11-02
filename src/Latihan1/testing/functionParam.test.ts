describe('Function Parameters', () => { 
    it("should support default param and optional", ()=>{
        function sumNumber(A: number, B?:number , C:number = 10): number{
            if(typeof B === 'number'){
                return A + B + C
            }
            else return A+C
        }
        expect(sumNumber(3)).toBe(13)
        expect(sumNumber(1,2)).toBe(13)
        expect(sumNumber(3,4,5)).toBe(12)
    })
 })