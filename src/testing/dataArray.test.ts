describe('Array Type', () => { 
    it('Should Array', ()=>{
        let list:string[]
        let age:ReadonlyArray<number> = [20, 21] 
        list = ['kazu', 'kuchi']
        // age[0] = 18
        // list = 'kazu'
        console.info(list)
        console.info(age)
    })
 })