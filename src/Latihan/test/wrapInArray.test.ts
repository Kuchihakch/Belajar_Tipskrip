describe('Wrap In Array Function', () => { 
    it("Should have function support genercis type and return values in array", ()=>{
        function wrapInArray<T>(...v: T[]): T[]{
            return [...v]
        }
        const data = wrapInArray(1,2,3,4,5) //implisit typing for number
        console.log(data)
        const dataString = wrapInArray<string>('kuchi', 'void', 'felienz') //explicit type: string
        console.log(dataString)
    })
 })