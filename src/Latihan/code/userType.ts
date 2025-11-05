import type { Level } from "./levelInterface"

interface BaseUser{
    id: string | number,
    username: string,
    email: string
}
export interface Member extends BaseUser{
    membershipLevel: Level
}
export interface Admin extends BaseUser{
    access: string[]
}
export type userType = Member | Admin