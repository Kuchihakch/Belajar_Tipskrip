// Union + Conditional
export interface User{
    id: string,
    name: string,
    email: string,
    gender: 'male' | 'female',
    phone?: string
}