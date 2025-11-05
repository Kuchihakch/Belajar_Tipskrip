describe('User vs Admin Enum', () => { 
    it("should support Union Type for user or admin", ()=>{
        type User = {
            id: number,
            username: string,
            email: string
        } 
        type Admin = {
            id: number,
            username: string,
            email: string,
            role: 'admin',
            accessLevel: number
        }
        type UserProfile = User | Admin
        //type guard Admin
        function isAdmin(u: UserProfile): u is Admin{
            return (u as Admin).role === 'admin'
        }
        function showProfile(u: UserProfile): string{
            if(isAdmin(u)){
                return `Halo, ${u.username}: akses Levelmu ${u.accessLevel}`
            }else{
                return `Halo ${u.username}`
            }
        }
        const user1 = {
            id: 1,
            username: 'kazu',
            email: 'kazuskem@gmail.com'
        } 
        const user2 = {
            id: 0,
            username: 'felienz',
            email: 'felienz@gmail.com',
            role: 'admin',
            accessLevel: 10
        }
        console.log(showProfile(user2))
        console.log(showProfile(user1))
    })
 })