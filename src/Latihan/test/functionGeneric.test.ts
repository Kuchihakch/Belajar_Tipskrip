import { getLast, identity, mergeObj } from "../code/functionGeneric"

describe('Function Generics', () => { 
    // it("Should Support type Generics in function", ()=>{
    //     const data:string[] = ["Kuchi", "kazu", "FelienZ"]
    //     console.log(getLast(data))
    //     /* const newData = "felienz"
    //     console.log(getLast(newData)) */
    // })
    // it("Should support multiple generic", ()=>{
    //     const obj1 = {name: 'Felienz', hobby: ['code', 'anime']}
    //     const obj2 = {age: 20, gender: 'pria'}

    //     console.log(mergeObj(obj1, obj2))
    // })
    // it("should support optional param with generic type", ()=>{
    //     console.log(identity('felienz'))
    //     console.log(identity())
    // })
    it("should support multiple generic type too", ()=>{
        function merge<A extends object, B extends object>(a: A, b: B): A & B{
            return {...a, ...b}
        }
        const hasil = merge({a: 1}, {b: 2});
        console.log(hasil)
        // const hasilNumber = merge(1,2) //error krn number bukan instance objek
        // const hasilArray = merge(['kuchi'], ['kazu']) //tidak langsung error runtime, karena array memang intanceof objek di js,
        // tapi ketika di run hasilnya menjadi pasangan key(index), value sehingga tdk bisa merge kedua array seperti ini 
        function pair<X,Y>(a: X, b: Y): [X,Y]{
            return [a, b]
        }
        const pasangan = pair<string, number>('apel', 100);
        const [first, second] = pair<string, number>('kucing', 100)
        console.log(first)
        console.log(second)
        console.log(pasangan)
        function mergeAndMark<T extends object, U extends object>(a: T, b: U): (T & U) & { merged: true }{
            return {...a, ...b, merged:true}
        }
        const hasil2 = mergeAndMark({a: 1}, {b: 2});
        console.log(hasil2)
    })
    // it("should support optional generic type", ()=>{
    //     function firstOrDefault<T>(v: T[]/* , defaultValue?:T) */) : T | undefined {
    //         return v.length ? v[0] : undefined
    //     }
    //     const data = firstOrDefault([7, 8, 9]) // 7
    //     // const data2 = firstOrDefault([], 100)   // 100
    //     const data3 = firstOrDefault([])        // undefined
    //     console.log(data + /* ', ' +  data2 */  ', ' + data3)
    // })
    it("Should support fn generics to filtering array", ()=>{
        function filterArray<T>(val: T[], item:(data: T)=>boolean):T[]{
            //misal, ([1,2,3,4,5], n => n>3 -> [4,5])
            return val.filter(item)
        }
        const numbers = filterArray([1, 2, 3, 4, 5], n => n > 3);
        console.log(numbers)
        const names = filterArray(['aku', 'kamu', 'dia'], s => s.length === 4);
        console.log(names)
    })
    it("Should support generic constraint", ()=>{
        function getName<T extends {name: string}>(v: T): string{
            // return 'name' in v ? v.name : 'nama tidak ada' //tidak perlu  krn langsung extend prop name
            return (v.name.trim() !== '') ? v.name : 'nama kosong'
        }
        console.log(getName({ name: 'FelienZ', age: 20 }))
        console.log(getName({age: 20, name:''}))
    })
    it("should support utility with generic type", ()=>{
        interface User{
            name: string,
            id: number,
            age: number
        }
        function makePartial<T>(val: T, key: (keyof T)[]): Partial<T>{
            const data: Partial<T>  = {}
            key.forEach(i => {
                data[i] = val[i]
            });
            return data       
        }
        const user:User = { name: 'FelienZ', age: 20, id:123 };
        let partialUser = makePartial(user, ['name']);
        console.log(partialUser)
    })
    it("Should support custom hook with generic type", ()=>{
        // val: true -> toggle() -> val: false -> toggle() -> val: true
        // theme: 'dark' -> switchTheme() -> 'light' -> switchTheme() -> 'dark'
        function useToggle<T>(a: T, b:T): [()=>T, ()=> void]{
            //mis: a = true, b = false -> toggle
            //returnnya itu adalah data dan mutatornya
            // console.log('cek a: ', a, ' cek b: ', b)
            let current = a
            return [()=>current, ()=> { current = current === a ? b : a}]
        }
        const [theme, switchTheme] = useToggle('dark', 'light');
        console.log(theme())
        switchTheme()
        console.log(theme())
        const [active, setIsActive] = useToggle('off', 'on')
        console.log(active())
        setIsActive()
        console.log(active())
    })
    it("Should support generic type for props", ()=>{
        function renderList<T>(items: T[], render: (item: T, idx: number)=> string): string[]{
            return items.map(render)
        }
        const items = [1, 2, 3];
        const result = renderList(items, (n, i) => `Nomor ${i}: ${n}`); 
        console.log('cek result: ', result)
    })
 })