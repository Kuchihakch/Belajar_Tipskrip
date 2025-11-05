describe('Type Assertion', () => { 
    it("Should support type assertions in function", ()=>{
        function checkType(v: number[] | string[]): number{
            if((v as number[]).every(i => typeof v === 'number')){
                return (v as number[]).length
            } 
            else{
                return(v as string[]).length
            }
        }
        console.log(checkType([1,2,3,4]))
        console.log(checkType(['Hello', 'World']))
        // console.log(checkType([false, 5>2]))
    })
 })