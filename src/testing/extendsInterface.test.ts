import { Gender, Role, type Course, type Mahasiswa } from "../code/extendsInterface"

describe('Extend Interface', () => { 
    it("Should Have Same properties with Interface that Extends to CivitasAkademika", ()=>{
        const course1:Course[] = [
        {
            id: 1,
            name: "Metopen",
            duration: 2
        },
        {
            id: 2,
            name: "Data Science",
            duration: 2
        }, 
        {
            id: 3,
            name: "Pemvis",
            duration: 2
        }
    ]
        const course2: Course[] = [{
            id:4,
            name:"Mobile",
            duration:2
        }, 
        {
            id: 5,
            name:"Cyber",
            duration:2
        }
    ]
        const mhs1:Mahasiswa = {
            id:123,
            name: 'Felienz',
            age:21,
            role:Role.STUDENT,
            gender: Gender.MALE,
            Course: 'Informatics',
            learning: function(courses: Course[]): string {
               return `Mahasiswa ${this.name} Mengambil Matkul: ${courses.map(i => i.name)}`
            },
            Semester: 5
        }
        const mhs2:Mahasiswa = {
            id:456,
            name: 'Kazu',
            age:20,
            role:Role.STUDENT,
            gender: Gender.MALE,
            Course: 'Informatics',
            learning: function(course: Course[]): string{
                return `Mahasiswa ${this.name} mengambil MK: ${course.map(i=>i.name)}`
            },
            Semester: 5
        }
        console.info(mhs1)
        console.info(mhs1.learning(course1))
        expect(mhs1.Course).toBe('Informatics')
        expect(mhs1.role).toBe('Student')
        expect(mhs1.learning(course1)).toContain('Pemvis')
        expect(mhs1.learning(course1.concat(course2))).toContain('Mobile')
        console.info(mhs2)
        expect(mhs2.Course).toBe('Informatics')
        expect(mhs2.role).toBe('Student')
        expect(mhs2.learning(course2)).toContain('Mobile')
        //unmatch course
        expect(mhs2.learning(course2)).toContain('Pemvis')
    })
 })