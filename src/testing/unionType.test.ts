describe('Union Data Type', ():void => { 
    it('Should match defined type in Union', ():void =>{
        let descriptions: string | object = 'Ini adalah My kisah'
        descriptions = {title: 'My Kisah'} //fine
        // descriptions= 123 //Hell nah
        // descriptions=['My Kisah'] // Anomali array=object
        // descriptions=true //Hell nah
        console.info(descriptions)
    })
    it('Should Support value Type', ()=>{
        function Operations(value: number | string | boolean){
            if(typeof(value) === 'number'){
                return value*value // Value Sq
            }
            if(typeof(value)==='string'){
                return `Username: ${value.toUpperCase()}`
            }
            else if(typeof(value) === "boolean"){
                return !value
            }
        }
        expect(Operations(5)).toBe(25)
        expect(Operations('FelienZ')).toBe('Username: FELIENZ')
        expect(Operations(5>2)).toBe(false) //true -> false, false-> true
    })
 })