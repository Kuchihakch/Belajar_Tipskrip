describe('Callback', () => { 
    it("Should support callback as fn param", ()=> {
        function handleNumber(n: number, calculate: (n: number) => string): string{
            return calculate(n)
        }
        function numberToString(n: number):string{
            return `${n}`
        }
        function numberToStringFormat(n: number):string{
            return `${n.toLocaleString('id-ID', {style: 'currency', currency: 'IDR'})}`
        }
        const number1 = handleNumber(5, numberToString)
        console.log(number1)
        const number2 = handleNumber(5000, numberToStringFormat)
        console.log(number2)
    })
 })