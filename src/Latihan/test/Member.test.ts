import { PremiumMember } from "../code/Member"

describe('Member Class', () => { 
    it("Should support inheritance class", ()=>{
        const person1 = new PremiumMember('1', 'felienz', 2023)
        console.info(person1.memberInfo)
        person1.membership = 'admin'
        console.info(person1.memberInfo)
    })
 })