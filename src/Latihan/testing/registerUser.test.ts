describe('Register User', () => { 
    it("should support function with default & optional params", ()=>{
        function registerUser({username, age, email , role= "member"} : {username: string, email: string, age?:number, role?: ('admin' | 'member')}): string{
            if(typeof age === 'number') {
                return `[${username}] ([${role}]) - [${email}] [${age}]`
            }else{
                return `[${username}] ([${role}]) - [${email}]`
            }
        }
        const user1 = registerUser({username: 'kazu', email: 'kazuskem@gmail.com', role: "member"})
        const user2 = registerUser({username: 'Kuchi', email: 'kuchiTrusted@gmail.com', age: 21 , role:'admin'})

        console.info(user1)
        console.info(user2)
        expect(user2).toContain('21')
    })
 })