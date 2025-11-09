export class Box<T>{
    private content!: T;
    setContent(val: T){
        this.content = val
    }
    getContent(): T{
        return this.content
    }
    getLength<T extends {length:number}>(val: T):number{
        return val.length
    }
    toArray(...val: T[]): T[]{
        return val
    }
}