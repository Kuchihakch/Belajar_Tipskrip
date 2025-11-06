import { Customerjs } from "../code/Customerjs"

describe('Customer Js', () => { 
    it("should support customer class instance", ()=>{
        const pelanggan1 = new Customerjs('Kuchiha')
        expect(pelanggan1.getCustomerName()).toBe('Kuchiha')
    })
 })