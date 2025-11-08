import { getLast, mergeObj } from "../code/functionGeneric"

describe('Function Generics', () => { 
    it("Should Support type Generics in function", ()=>{
        const data:string[] = ["Kuchi", "kazu", "FelienZ"]
        console.log(getLast(data))
        /* const newData = "felienz"
        console.log(getLast(newData)) */
    })
    it("Should support multiple generic", ()=>{
        const obj1 = {name: 'Felienz', hobby: ['code', 'anime']}
        const obj2 = {age: 20, gender: 'pria'}

        console.log(mergeObj(obj1, obj2))
    })
 })