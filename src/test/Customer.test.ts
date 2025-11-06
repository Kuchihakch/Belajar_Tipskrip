import { Customer } from "../code/Customer"

describe('Class Customer', () => { 
    it("Should support Class Customer instance", ()=>{
        const pelanggan1 = new Customer('Kuchiha')
        expect(pelanggan1.getCustomerName()).toBe('Kuchiha')
    })
 })