import type { AddFunction } from "../code/functionInteface"

describe('Function Interface', () => { 
    it('Should Add 2 Operator with Function Interface', ()=>{
        const add:AddFunction = (value1: number, value2: number): number => value1 + value2
        console.info(add(1, 5))
        expect(add(1,5)).toBe(6)
    })
    //indexable Interface eg. array, obj
    it('Should support  indexable interface', ()=> {
        interface Position{
            [index: number]: string
        }
        const jobPosition: Position = ['Developer', 'Manager', 'Admin']
        console.info(jobPosition[0])
        expect(jobPosition[0]).toBe('Developer')
        console.info(jobPosition[1])
        expect(jobPosition[1]).toBe('Manager')

        interface objectIterable{
            [index: string]: string
        }

        const book:objectIterable = {
            title: 'Rahasia Kripto',
            author: 'King Timoti'
        }
        console.info(book['title'])
    })
    
 })