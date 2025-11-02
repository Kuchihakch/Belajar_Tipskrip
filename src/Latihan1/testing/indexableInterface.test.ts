describe('Indexable Interface', () => { 
    it('Should support array/object iterable', ()=>{
        interface Translate{
            [index: string]: string
        }
        const textA: Translate ={
            "Hello": "Halo",
            "World": "Dunia"
        }
        const textB: Translate ={
            "Kazu": "Scam",
            "Kuchi": "Trusted"
        }
        console.info(textA["Hello"])
        console.info(textA["World"])
        expect(textA["Hello"]).toBe('Halo')
        expect(textA["World"]).toBe('Dunia')
        console.info(textB["Kazu"])
        expect(textB["Kazu"]).toBe('Scam')
    })
 })