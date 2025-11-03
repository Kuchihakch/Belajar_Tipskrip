import type { OrangKampus } from "../code/typeIntersection2"

describe('Intersection Type', () => { 
    it("should support intersection type from OrangKampus", ()=>{
        const person1: OrangKampus = {
            name: 'Felienz',
            kind: 'mahasiswa',
            npm: '123',
            prodi: 'Informatics'
        }
        const person2: OrangKampus = {
            name: 'Kuchi',
            kind: 'dosen',
            nidn: '123',
            matkul: 'Coding'
        }
        function profileKampus(value: OrangKampus){
            if(value.kind === 'dosen'){
                return `${value.name}: Sedang Mengajar`
            }else{
                return `${value.name}: Sedang Belajar`
            }
        }
        console.info(profileKampus(person1))
        expect(profileKampus(person1)).toBe('Felienz: Sedang Belajar')
        console.info(profileKampus(person2))
    })
 })