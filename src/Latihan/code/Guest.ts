export interface Guest{
    username: string,
    role: 'guest'
}
export interface Registered{
    username: string,
    role: 'admin' | 'member',
    email: string
}
export type newUser = Guest | Registered