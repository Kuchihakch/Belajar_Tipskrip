import { Person } from "../code/Person"

describe('Person Class', () => { 
    class Employee extends Person{
            private role: 'staff' | 'manager' | 'director' = 'staff'
            constructor(public name:string, protected email: string){
                super(name,email)
            }
            override get personInfo():string{
                return `${super.personInfo}, role ${this.role}`
            }
            set personRole(v: 'staff' | 'manager' | 'director'){
                this.role = v
            }
        }
    /* it("should protect sensitive prop & method via visibility", ()=>{
        class PersonInstance extends Person{
            public override set personEmail(v: string){
                v !== '' ? this.email = v : ''
            }// kasih public di child ini
        }
        const newUser = new PersonInstance('felienz', 'felienz@gmail.com')
        newUser.personEmail = 'FelienZNew@gmail.com' //bisa karena public di child
        newUser.personPassword = '123'
        console.log(newUser.personInfo)

        const newUser2 = new Person('kazu', 'kazu@gmail.com')
        // newUser2.personEmail = 'emailbaru' // tidak bisa, krn protected di parent
        console.log(newUser2.personInfo)
    })
    it("Should support inheritance class", ()=>{
        const person1 = new Employee('kazu', 'kazu@gmail.com')
        // person1.email = 'skem'
        console.info(person1.personInfo)
        person1.personPassword = '234'
        person1.personRole = 'manager'
        console.info(person1.personInfo)
    }) */
    it("Should support polymorphism", ()=>{
        function printPersonInfo(v: Person[]): void{
            v.forEach(i => {
                console.log (i.personInfo)
            }) //cukup param tipe Person, karena Employee juga instancenya kecuali ada kasus yang membedakan
        }
        const personData = new Person('kazu', 'kazu@gmail.com')
        personData.personPassword = '123'
        const employeeData = new Employee('Kuchiha', 'Kuchi@gmail.com')
        employeeData.personPassword = '234'
        employeeData.personRole = 'manager'
        const data: Person[] = [ new Person('Kuchiha', 'Kuchi@gmail.com'), personData , new Employee('kazu', 'kazu@gmail.com'), employeeData]
        printPersonInfo(data)
    })
    it("should support type casting", ()=>{
        const personData = new Person('kazu', 'kazu@gmail.com')
        personData.personPassword = '123'
        const employeeData = new Employee('Kuchiha', 'Kuchi@gmail.com')
        employeeData.personPassword = '234'
        employeeData.personRole = 'manager'
        const data: Person[] = [ new Person('Kuchiha', 'Kuchi@gmail.com'), personData , new Employee('kazu', 'kazu@gmail.com'), employeeData]

        function resetEmployeeRole(v: Person[]){
            v.forEach(i => {
                if(i instanceof Employee){
                    // (i as Employee).personRole = 'staff'
                    i.personRole = 'staff'
                }
            })
        }
        resetEmployeeRole(data)
        data.forEach(i => console.info(i.personInfo))
    })
 })
