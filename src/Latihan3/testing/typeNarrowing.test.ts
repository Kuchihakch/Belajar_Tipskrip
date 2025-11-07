describe('Type Narrowing', () => { 
    it("Should Support Type Narrowing", ()=>{
        function printType(val: string | number | boolean): void{
            if(typeof val === 'string'){
                console.log(`[String]: ${val??'Kosong'}`)
            }else if(typeof val === 'number'){
                console.log(`[Number]: ${val}`)
            }else{
                console.log(`[Boolean]: ${val ? 'benar': 'salah'}`)
            }
        }
        printType(5)
        printType('lima')
        printType(5===5)
    })
    it("should support in/discriminant union check", ()=>{
        type Admin = { role: 'admin', akses: string[] }
        type Guest = { role: 'guest', expired: number }
        
        type Person = Admin | Guest
        function infoUser(v: Person): void{
            if(v.role === 'admin'){
                console.log(`${v.role} - akses: ${v.akses}`)
            }else{
                console.log(`${v.role} - expired: ${v.expired}`)
            }
        }
        //atau in
        function infoUserIn(v: Person):void{
            if('akses' in v){
                console.log(`${v.role} - akses: ${v.akses}`)
            }
            else{
                console.log(`${v.role} - expired: ${v.expired}`)
            }
        }

        const dataPerson: Person[] = [
            { role: 'admin', akses: ['db', 'be', 'fe'] },
            { role: 'guest', expired: 20 },
        ]
        dataPerson.filter(infoUser)
        dataPerson.filter(infoUserIn)
    })
 })