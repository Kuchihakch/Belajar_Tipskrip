import { Level, type newCourse } from "../code/levelInterface"

describe('Level Interace', () => { 
    it("Should Match type with Level Interface", ()=>{
        const course1:newCourse = {
            id: 'course-1',
            title: 'Math Course',
            level: Level.ADVANCED,
            tags: ['math', 'advanced']
        }
        const course2:newCourse = {
            id: 'course-2',
            title: 'Coding Course',
            level: Level.INTERMEDIATE,
            tags: ['code', 'Intermediate']
        }
        const course3:newCourse = {
            id: 'course-3',
            title: 'AI Course',
            level: Level.BEGINNER,
            tags: ['AI', 'Beginner']
        }
        const AllCourse = [course1, course2, course3]
        const AboveBeginner = AllCourse.filter(i=> i.level !== Level.BEGINNER)
        console.info('cek Course: ', AboveBeginner)
        expect(AboveBeginner).not.toContain("Beginner")
    })
 })