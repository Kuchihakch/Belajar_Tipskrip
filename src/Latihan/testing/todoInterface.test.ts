import type { Todo } from "../code/todoInterface"

describe('Todo Interface', () => { 
    it('Should support Array with Todo Interface', ()=> {
        function showDone(todo: Todo[]): number{
            return todo.filter(i => i.done).length
        }
        let data:Todo[] = [
            {
                id:123,
                task: 'task1',
                done:true
            },
            {
                id:456,
                task: 'task2',
                done:true
            },
            {
                id:789,
                task: 'task3',
                done:false
            },
            //invalid case -> missing prop, unmatch prop type
            /* {
                task: 'task4',
                done:'false'
            }, */
        ]
        console.info(showDone(data))
        expect(showDone(data)).toBe(2)
    })
 })