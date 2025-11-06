import { Category } from "../code/Category"

describe('Category Class', () => { 
    it("Should support Getter and Setter", ()=>{
        const category1 = new Category()
        console.log('cek Category: ', category1.name)
        //set name
        category1.name = 'beverages'
        console.log('cek Category: ', category1.name)
        //set name with empty string
        category1.name = ''
        console.log('cek Category: ', category1.name)
    })
 })