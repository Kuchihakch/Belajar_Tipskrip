import { Circle, Square, type Shape } from "../code/Shape"

describe('Shape Interface Contract', () => { 
    it("Should suppor class implement Interface", ()=>{
        function printArea(v: Shape):void{
            console.log(v.area())
        }
        const shapeUnit: Shape[] = [
            new Circle(3),
            new Circle(10),
            new Square(3),
            new Square(10)
        ]
        shapeUnit.forEach(i => printArea(i))
    })
 })