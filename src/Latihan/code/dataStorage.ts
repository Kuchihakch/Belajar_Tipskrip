export class DataStorage<T>{
    data: T[] = []
    add(...item: T[]){
        this.data.push(...item)
    }
    remove(item: T){
        this.data = this.data.filter(i => i !== item)
    }
    getData():T[] {
        return this.data
    }
}