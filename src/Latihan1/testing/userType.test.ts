import { Level } from "../code/levelInterface"
import type { Admin, Member, userType } from "../code/userType"

describe('User Type', () => { 
    it("Should Support Variable that refer to Admin & Member Interface with Type Guard" , ()=>{
        const users:userType[] = [
            {
            id:123,
            username: 'Felienz',
            email: 'felienz@gmail.com',
            membershipLevel: Level.INTERMEDIATE,
        },{
            id:'admin-123',
            username: 'Kuchiha',
            email: 'Kuchiha@gmail.com',
            access: ['all']
        }
        ] 
        const mimin = users.filter((i): i is Admin => !!(i as Admin).access)
        const member = users.filter((i): i is Member => !!(i as Member).membershipLevel)
        console.log('cek mimin: ', mimin)
        console.log('cek member: ', member)
    })
 })