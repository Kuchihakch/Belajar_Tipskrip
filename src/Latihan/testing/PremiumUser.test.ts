describe('Intersection Type', () => { 
    it("should support Intersection Type for user data", ()=>{
        type BasicUser = {
            id: number | string,
            name: string
        }
        type Premium = {
            premiumStartDate: number,
            premiumEndDate: number
        }
        type PremiumUser = BasicUser & Premium
        
        const user1: PremiumUser = {
            id: 1,
            name: 'felinz',
            premiumStartDate: 4,
            premiumEndDate: 29
        }
        console.info("cek user premium: ", user1)
    })
 })