describe('Function Overloading', () => { 
    it("should support Function Overloading", ()=> {
        function combine(a: number, b: number): number
        function combine(a: string, b: string): string
        function combine(a: any, b: any): any{
            if(typeof a === 'string' && typeof b === 'string'){
                return `${a} ${b}`
            }
            if(typeof a === 'number' && typeof b === 'number'){
                return a + b
            }else{
                return `Type Tidak didukung`
            }
        }

        const cek1 = combine('hello', 'world')
        console.log(cek1)
        const cek2 = combine(7, 5)
        console.log(cek2)
    })
 })