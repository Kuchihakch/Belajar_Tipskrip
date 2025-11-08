export interface Shape{
    area:()=> number
}
export class Circle implements Shape{
    private readonly pi = 3.14;
    constructor(public radius: number){}
    area(): number{
        return this.pi * Math.pow(this.radius,2) 
    };
}
export class Square implements Shape{
    constructor(public side: number){}
    area = ():number => Math.pow(this.side, 2);
}