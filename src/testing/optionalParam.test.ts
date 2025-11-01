describe('Optional Parameters', () => { 
    it('should support null and undefined value', ()=> {
        function sayHello(name?: string){
            if(name){
                console.log(`Hello, ${name}`)
            }else{
                console.log('Hello World')
            }
        }
        sayHello('FelienZ')
        const name: string | undefined = undefined
        sayHello(name) //undefined -> print else
    })
 })