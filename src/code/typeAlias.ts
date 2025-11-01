export type user = {
    name:string,
    id:string,
    gender:string,
    email:string,
    age:number,
    detail: object | string
}
export type product = {
    id:string,
    price:number,
    stock: number,
    name:string,
    detail:object | string,
    ulala?:string //optional prop
}