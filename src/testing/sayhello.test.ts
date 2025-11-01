import { SayHello } from "../code/sayHello"

describe('hello-test', function(): void{
    it('should say Hello Felienz', function(): void{
        expect(SayHello('Felienz')).toBe('Hello, Felienz')
    })
})