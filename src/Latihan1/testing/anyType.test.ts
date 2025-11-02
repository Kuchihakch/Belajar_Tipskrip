describe('Any/Unknown Type', () => { 
    it("Should Support Any Type", ()=> {
        const itemA:any[] = ['Kazu', 5>2 , 1, 'Kuchi']
        //invalid Any
        // const itemB:any[] = 'Skem'
        const itemB:string[] = ['item1', 'item2']
        console.info(itemA)
        console.info(itemA[0] + itemA[1])
        expect(itemA[1]).toBe(true)
        expect(itemA[2]).toBe(1)
        console.info(itemB)
    })
    it("Should Support Unknown Type", ()=> {
        const itemA: unknown[] =['Kazu', 2<1, 4]
        // console.info(itemA[0] + itemA[1])
        //Ini Perbedaannya dengan Any, typenya unknown jadi bakal di protes
        if(typeof(itemA[0]) === 'string' && typeof(itemA[2]) === "number"){
            console.info(itemA[0] + itemA[2])
        }
    })
 })