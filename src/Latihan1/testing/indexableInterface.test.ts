describe('Indexable Interface', () => { 
    it('Should support array/object iterable', ()=>{
        interface Translate{
            [index: string]: string | number
        }
        const textA: Translate ={
            "Hello": "Halo",
            "World": "Dunia"
        }
        const textB: Translate ={
            "Kazu": "Scam",
            "Kuchi": "Trusted"
        }
        const textC: Translate = {
            "one": 1,
            "two": 2,
            "three": 'tiga'
        }
        console.info(textA["Hello"])
        console.info(textA["World"])
        expect(textA["Hello"]).toBe('Halo')
        expect(textA["World"]).toBe('Dunia')
        console.info(textB["Kazu"])
        expect(textB["Kazu"]).toBe('Scam')
        console.info(textC["two"])
        expect(textC["two"]).toBe(2)
        console.info(textC["three"])
        expect(textC["three"]).toBe('tiga')
    })

 })