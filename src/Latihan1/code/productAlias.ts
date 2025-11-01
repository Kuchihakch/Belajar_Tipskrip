export enum productType{
    ELECTRONIC = 'ELECTRONIC',
    CLOTHING = 'CLOTHING',
    FOOD = 'FOOD'
}

export type product = {
    id:string,
    name:string
    price: number
    category:productType
    stock:number
}