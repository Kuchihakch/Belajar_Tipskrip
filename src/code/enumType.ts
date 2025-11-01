//Kalo enum tanpa definisi posisi/nilai tertentu bisa jadi acak sesuai urutan jadi number type. kita bisa atur jadi string/number value
export enum jobPosition {
    DEVELOPER = 'DEVELOPER',
    MANAGER = 'MANAGER',
    SUPERVISOR = 'SUPERVISOR',
    ADMIN = 'ADMIN',
    SALES = 'SALES',
}

export type officer = {
    id:string | number,
    name: string,
    position: jobPosition
}