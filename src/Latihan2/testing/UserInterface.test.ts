describe('User Interface', () => { 
    enum UserStatus {
        ACTIVE = 'active',
        INACTIVE = 'inactive',
        BANNED = 'banned'
    }
    type UserRole = 'admin' | 'user' | 'guest'
    interface User{
        id: number,
        username: string,
        role: UserRole,
        status: UserStatus
    }

    const users: User[] = [
        {
            id:1,
            username: 'felienz',
            role: 'admin',
            status: UserStatus.ACTIVE
        },
        {
            id:2,
            username: 'Kuchi',
            role: 'user',
            status: UserStatus.ACTIVE
        },
        {
            id:3,
            username: 'kazu',
            role: 'user',
            status: UserStatus.BANNED
        },
    ]
    it("Should support enumeration and aliasing for user Interface", ()=>{

        function checkNameActive(u: User): u is User{
            return u.status === UserStatus.ACTIVE
        }
        const activeUser = users.filter(checkNameActive).map(i => i.username)
        activeUser.forEach(i => console.log(i))

        function getUsername(val: string | User): string{
            if(typeof val === 'string'){
                return val
            }else{
                return (val as User).username //assertion
            }
        }
        console.log('cek username', getUsername({
                id:3,
                username: 'kazu',
                role: 'user',
                status: UserStatus.BANNED
            }))
        console.log('cek username string: ', getUsername('Kuchi'))
    })
    it("Should filter User using type guard to get role 'user' ", ()=>{
        function isRoleUser(u: User): u is User{
            return u.role === 'user'
        }
        const userRole = users.filter(isRoleUser)
        console.log('cek role user: ', userRole)
    })
 })