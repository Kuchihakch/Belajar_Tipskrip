import type { User } from "../code/userData"

describe('User Interface', () => { 
    it("Object value type should match with User Interface", ()=>{
        let userA: User ={
            name: 'Felienz',
            email: 'Felienz@gmail.com',
            gender: 'male',
            phone: '+62-12345',
            id:'USR-01'
        }
        console.info(userA)
        expect(userA.gender).toBe("male")
        let userB: User ={
            name: 'MyWaifu',
            email: 'MyWaifu@gmail.com',
            gender: 'female',
            id:'USR-02'
        }
        console.info(userB)
        expect(userB.gender).toBe("female")
        //invalid case: none match enumeration for gender -> aman testing (babel: hapus type -> anggap js), tapi type fatal
        /* let userC: User ={
            name: 'Player',
            email: 'Player@gmail.com',
            gender: 'other',
            id:'USR-X'
        }
        console.info(userC) 
        expect(userC.gender).toBe("other")
        */
    })
 })