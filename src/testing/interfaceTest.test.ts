import { type Account } from "../code/Interface"

describe('Interface', () => { 
    it('Should match with described Interface', ()=>{
        let user:Account = {
            id:123,
            name: "Felienz",
            // roles:Role.DEVELOPER,
            address: 'Indonesia',
            identityAddress: 'kuchi-dev',
            email: 'Felienz@gmail.com'
        }
        // user.email = 'Kuchiha@gmail.com' //readonly
        console.info(user)
        user = {
            id:123,
            name: "Kazu",
            // roles:Role.DEVELOPER,
            address: 'Indonesia',
            // identityAddress: 'kuchi-dev',
            email: 'Kazu@gmail.com'
        }
        console.info(user)
    })
 })