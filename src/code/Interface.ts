//mirip TypeALias
/* export enum Role{
    ADMIN = "ADMIN",
    CUSTOMER = "CUSTOMER",
    DEVELOPER = "DEVELOPER"
} */

export interface Account{
    id: string | number,
    name: string,
    // roles: Role
    address?: string
    readonly identityAddress?:string
    readonly email:string
}