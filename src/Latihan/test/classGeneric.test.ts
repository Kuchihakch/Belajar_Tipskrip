import { Box } from "../code/classGeneric"

describe('Class Generics', () => { 
    it("Should support generic class", ()=>{
        const data = new Box<string[]>()
        data.setContent(["kuchiha", "felienz"])
        console.log(data.getContent())
        const newData = new Box<number>()
        newData.setContent(5)
        console.log(newData.getContent())
    })
 })