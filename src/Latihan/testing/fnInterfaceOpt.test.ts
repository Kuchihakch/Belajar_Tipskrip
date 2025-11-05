describe('Function Inteface + Optional param', () => { 
    it("Should support Function Inteface + Optional param", ()=>{
        interface Greeter{
            (nama: string, formal?: boolean): string
        }
        const guest: Greeter = (nama: string, formal?: boolean) => formal ? `Selamat datang, Bapak/Ibu ${nama}` : `Halo ${nama}`
        console.log(guest('Kuchi', true))
        console.log(guest('kazu'))
    })
 })