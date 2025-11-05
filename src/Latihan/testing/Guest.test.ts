import type { Guest, newUser, Registered } from "../code/Guest"

describe('Guest Type', () => { 
    it("should support value that match with Guest Type", ()=>{
        const users:newUser[] = [
            {
                username: 'felienz',
                role: 'admin',
                email: 'felienz@gmail.com'
            },
            {
                username: 'kuchiha',
                role: 'member',
                email: 'kuchiha@gmail.com'
            },
            {
                username: 'kazu',
                role: 'guest',
            }
        ]
        function isRegistered(u: newUser): u is Registered{
            return !!(u as Registered).email //prop existence
        }
        const registeredUser = users.filter(isRegistered)
        console.log('cek user teregistrasi: ', registeredUser)
        expect(registeredUser).toHaveLength(2)
        function greetUser(u: newUser):string{
            switch(u.role){
                case "guest":
                    return `Halo ${u.username}`
                case "admin":
                    return `Welcome mint!`
                case "member":
                    return `Halo ${u.username} | ${u.email}`
            }
        }
        const u1:newUser = {
                username: 'felienz',
                role: 'admin',
                email: 'felienz@gmail.com'
            }
        const u2:newUser ={
                username: 'kuchiha',
                role: 'member',
                email: 'kuchiha@gmail.com'
            }
        expect(greetUser(u1)).toBe('Welcome mint!')
        expect(greetUser(u2)).toBe('Halo kuchiha | kuchiha@gmail.com')
    })
 })