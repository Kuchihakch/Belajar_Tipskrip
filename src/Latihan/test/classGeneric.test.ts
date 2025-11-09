import { Box } from "../code/classGeneric"
import { DataStorage } from "../code/dataStorage"

describe('Class Generics', () => { 
    /* it("Should support generic class", ()=>{
        const data = new Box<string[]>()
        data.setContent(["kuchiha", "felienz"])
        console.log(data.getLength(["kuchiha", "felienz"]))
        console.log(data.getContent())
        const newData = new Box<number>()
        newData.setContent(5)
        console.log(newData.getContent())
        const dataString = new Box<string>()
        dataString.getLength('felienz')
    })
    it("should support toArray method", ()=>{
        const data = new Box<string>()
        console.log(data.toArray('kuchi', 'kazu'))
    }) */
    it("Should support operations in class DataStorage", ()=>{
        const numberData = new DataStorage<number>()
        numberData.add(1,2,3,4)
        console.info(numberData.getData())
        numberData.remove(3)
        console.info(numberData.getData())
        const stringData = new DataStorage<string>()
        stringData.add('kuchi', 'void', 'felienz')
        console.info(stringData.getData())
        stringData.remove('void')
        console.info(stringData.getData())
    })
 })