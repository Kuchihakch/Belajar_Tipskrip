describe('Animal', () => { 
    it("Should Print Sound Match with Animal Type", ()=>{
        type Animal = { kind: 'cat', meow: () => string } | { kind: 'dog', bark: () => string } | { kind: 'cow', moo: () => string }
        function isDog(a: Animal): a is { kind: 'dog', bark: () => string } {
            return a.kind === 'dog'
        }
        const data: Animal[] = [
            {
            kind: 'dog',
            bark: ()=> 'woof'
        },
        {
            kind: 'dog',
            bark: ()=> 'Guk!'
        },
        {
            kind: 'cat',
            meow: ()=> 'Miawww!'
        }
        ]
        function makeSound(a: Animal):string{
            switch(a.kind){
                case "cat":
                    return a.meow()
                case "dog":
                    return a.bark()
                case "cow":
                    return a.moo()
            }
        }
        const checkDog = data.filter(isDog)
        console.log('cek total Dog: ', checkDog.length)
        const kucing:Animal = {
            kind: 'cat',
            meow: ()=> 'Miawww!'
        }
        expect(makeSound(kucing)).toBe('Miawww!')
        console.info('Kucing bilang: ', makeSound(kucing))
    })
 })