describe('Function as Param(Callback)', () => { 
    it("Should support callback as params", ()=>{
        function printSummary(value: number[], calculate: (v: number[]) => number ):string{
            return `Jumlah: ${calculate(value)}`
        }
        function doCalculate(v: number[]):number{
            return v.reduce((a,val) => a + val)
        }

        const query:number[] = [1,2,3,4,5,6,7,8,8] // ubah bebas atau kalau hasil fix, print hasil fixnya saja, misal query = [1,2,3,4] -> "Jumlah: 10", ubah literal reduce di tobe
        const output:string = printSummary(query, doCalculate) //doCalculate as Callback that run on printSummary
        expect(output).toBe(`Jumlah: ${query.reduce((a, val) => a+val)}`)

        //or anonymous callback
        //declaration style
        expect(printSummary(query, function(v: number[]): number{
            return v.reduce((a,val) => a + val)
        })).toBe(`Jumlah: ${query.reduce((a, val) => a+val)}`)
        //with arrow style
        expect(printSummary(query, (v: number[]): number => v.reduce((a, val) => a +val))).toBe(`Jumlah: ${query.reduce((a, val) => a+val)}`)
    })
})