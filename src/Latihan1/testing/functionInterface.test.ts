describe('Function Interface', () => { 
    it("Should support interface for function", ()=> {
        interface Person{
            (firstName: string, lastName: string): string
        }
        const person1:Person = (A: string, B:string) => `${A} ${B}`
        console.info(person1('Orang', 'Pertama'))
        const person2:Person = function(A: string, B:string): string{
            return `${A} ${B}`
        }
        console.info(person2('Orang', 'Kedua'))
        function person3(A: string, B: string){
            return `${A} ${B}`
        }
        const showPerson3: Person = person3
        console.info(showPerson3('Orang', 'Ketiga'))
    })
 })