export class Box<T>{
    private content!: T;
    setContent(val: T){
        this.content = val
    }
    getContent(): T{
        return this.content
    }
}