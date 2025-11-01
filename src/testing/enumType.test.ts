import { jobPosition, type officer } from "../code/enumType"

describe('Enum Type', () => { 
    it('Should match Value with jobPosition enumerations', ()=> {
        let personal: officer ={
            id: 123,
            name: 'Rajab',
            position: jobPosition.DEVELOPER,
        }
        console.info(personal)
            personal = {
            id: 'abc',
            name: 'Kazu',
            
            position: jobPosition.DEVELOPER,
        }
        console.info(personal)
    })
 })