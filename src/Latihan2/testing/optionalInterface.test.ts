describe('Optional Interface prop', () => { 
    interface todo{
            id: number,
            task: string,
            completed: boolean,
            dueDate?: string
        }
        const TodoList: todo[] = [
            {
                id: 1,
                task: 'Belajar React Dasar',
                completed: true,
                dueDate: '20 September'
            },
            {
                id: 2,
                task: 'Belajar React Lanjut - Menerapkan Typescript',
                completed: false,
                dueDate: '20 November'
            },
            {
                id: 3,
                task: 'Belajar React Lanjut - State Management',
                completed: false,
                dueDate: '10 Desember'
            },
            {
                id: 4,
                task: 'Belajar Typescript Dasar - Interface ~ OOP',
                completed: true,
                dueDate: '10 November'
            },
            {
                id: 5,
                task: 'Belajar Typescript Lanjut - Generics ~ Validation',
                completed: false,
            },
        ]
    it("should support optional properties in interface", ()=>{
        function checkIsIncompleted(t: todo): t is todo{
            // return (t as todo).completed === false //bentuk assertion
            return !t.completed
        }
        const notCompleted = TodoList.filter(checkIsIncompleted)
        expect(notCompleted).toHaveLength(3)
        console.log('Cek Todo yang incomplete: ', notCompleted)
    })
    it("Should support fn with Callback", ()=>{
        function processTodo(t: todo, action: (t: todo)=> string): string{
            return action(t)
        }
        function completeTask(t: todo):string{
            return `Selesaikan: ${t.task}`
        }
        function TaskCompleted(t: todo):string{
            return `tugas ${t.task} sudah selesai`
        }

        TodoList.forEach(i => {
            if(i.completed){
                console.log(processTodo(i, TaskCompleted))
            }else{
                console.log(processTodo(i, completeTask))
            }
        })
    })
 })