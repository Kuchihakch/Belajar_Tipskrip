describe('Tuple Array', () => { 
    it('should match type and count', ()=>{
        let account:readonly[name:string, hobby:string, age:number] = ['felienz', 'javascript', 21]
        console.info(account[0])
        console.info(account[1])
        console.info(account[2])

        // account[0] = 'kazu'
    })
 })