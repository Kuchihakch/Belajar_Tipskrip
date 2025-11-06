describe('Type Assert & Narrowing', () => { 
    it("Should support type assert for function params", ()=>{
        function getEmail(input: {email: string} | string): string{
            //paksa percaya punya prop email -> risiko runtime error
            /* if((input as {email: string}).email){
                return `${(input as {email: string}).email}`
            }else{
                return `${input}`
            } */
           
           //pakai narrowing
           if(typeof input === 'string'){
            return input
           }else{
            return input.email
           }
        }
        console.log(getEmail('test'))
        console.log(getEmail({email: 'Kazu@gmail.com'}))
    })
    it("Should support type narrowing", ()=>{
        function parseValue(v: number | string | boolean): number | string | boolean{
            if(typeof v === 'number'){
                return v *2
            }
            else if(typeof v === 'string'){
                return v.toUpperCase()
            }else{
                return !v
            }
        }
        console.log('number: ', parseValue(5))
        console.log('string: ', parseValue('ini Lima'))
        console.log('bool: ', parseValue(5>2))
    })
 })