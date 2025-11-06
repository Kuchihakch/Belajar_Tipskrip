//ini tentang kontrak -> misal class operations yang implement interface
//numbervalue, summary maka harus punya properti dan method yang sesuai dengan kontrak interface
interface NumberValue{
    A: number, B: number //punya prop ini
}
interface Operations{
    AddNumber(A: number, B: number): number //punya method yang returnkan number bernama AddNumber
    SubstractNumber(A:number, B: number): number
}

export class Summary implements NumberValue, Operations{
    A: number;
    B: number;
    constructor(A: number, B: number){
        this.A = A,
        this.B = B
    }
    AddNumber():number{
        return this.A + this.B
    }
    SubstractNumber(): number {
        return this.A - this.B
    }
}