describe('Type Alias', () => { 
    it("should support type alias in array obj", ()=>{
        type Student = {
            nim: string | number,
            name: string,
            major?: string
        }

        const students: Student[] = [
            {
              nim: 1,
              name: 'felienz',
              major: 'informatics'
            },
            {
              nim: 2,
              name: 'kazu',
            }
        ]
        console.info(students)
        //filter yg punya jurusan -> type guard
        function checkisMajorExist(s: Student): s is Student{
            return !!(s as Student).major
        } // if exist -> return true or false for undefined/null major
        const majorExist = students.filter(checkisMajorExist)
        console.log('data student that contain major: ', majorExist)
        
    })
 })