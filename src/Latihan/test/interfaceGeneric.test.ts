describe('Generic Interface', () => { 
    it("Should support", ()=>{
        interface ApiResult<T = string>{
            data: T,
            success: boolean
        }
        function defaultResult(): ApiResult{
            return {data: '', success: true}
        }
        console.log(defaultResult())
    })
 })