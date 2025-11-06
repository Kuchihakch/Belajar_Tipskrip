import { Customer } from "../code/Customer"

describe('Class Customer', () => { 
    it("Should support Class Customer instance", ()=>{
        const pelanggan1 = new Customer('123', 'Kuchiha')
        expect(pelanggan1.getCustomerName()).toBe('Kuchiha')
        console.log(pelanggan1)
        // console.log(pelanggan1.nama) //private -> pakai getter, bisa via get atau method custom
        // pelanggan1.nama = 'kazu' -> pakai setter
    })
 })