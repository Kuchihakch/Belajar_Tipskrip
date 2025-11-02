import type { Anggota } from "../code/typeNarrowing"

describe('Type Narrowing', () => { 
    const person1:Anggota ={
            kind: 'pelajar',
            belajar: () => 'Sedang Belajar'
        }
    const person2:Anggota ={
            kind: 'pengajar',
            mengajar: () => 'Sedang Mengajar'
        }
    it("Should support type narrowing from Anggota", ()=>{
        expect(person1.belajar()).toBe("Sedang Belajar")
        expect(person2.mengajar()).toBe("Sedang Mengajar")
    })

    it("should match task with kind via validation", ()=>{
        function showTask(task: Anggota): string{
            if(task.kind === 'pengajar'){
                return task.mengajar()
            }else{
                return task.belajar()
            }
        }
        expect(showTask(person1)).toBe('Sedang Belajar')
        expect(showTask(person2)).toBe('Sedang Mengajar')
        //invalid task
        // expect(showTask(person2)).toBe('Sedang Belajar')
    })
 })