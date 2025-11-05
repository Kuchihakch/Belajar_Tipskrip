describe('Optional prop in Interface', () => { 
    it("should support optional properties in interface", ()=>{
        interface Book{
            title: string,
            author: string,
            publishedYear?: number
        }
        const books: Book[] = [
            {
              title: 'malin kundang',
              author: 'author anonim'
            },
            {
              title: 'BUMI',
              author: 'TERE LIYE',
              publishedYear: 2014
            }
        ]
        //type guard with existing props
        function isYearExist(b: Book): b is Book{
            // return !!(b as Book).publishedYear
            return typeof b.publishedYear === 'number' //safety for 0 value -> falsy
        }
        const yearExist = books.filter(isYearExist)
        console.log('Buku dengan Data lengkap: ', yearExist)
    })
 })