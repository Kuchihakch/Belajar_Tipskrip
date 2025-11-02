import type { UserwithAddress } from "../code/intersectionType"

describe('Intersection Type', () => { 
    it("Should have properties type match with intersection type", ()=> {
        const user:UserwithAddress = {
            name: 'Kuchiha',
            email: 'Kuchiha@gmail.com',
            city: 'Tokyo',
            postalCode: 'abc123'
        }
        console.info(user)
        expect(user).toHaveProperty('postalCode')
        //Negative Case -> fatal type & test
        /* const userwithMissingProp:UserwithAddress = {
            name: 'Kazu',
            email: 'Kazu@gmail.com'
        }
        console.info(userwithMissingProp)
        expect(userwithMissingProp).toHaveProperty('city') */
    })
 })