describe('Product Interface', () => { 
    it("Should support object that prop type match with Product Interface", ()=>{
        interface ProductInterface{
            id: number,
            name: string,
            price: number,
            stock: number,
            category?: string
        }
        const productList: ProductInterface[] = [
            {
              id: 1,
              name: 'Aqua',
              price: 5000,
              stock:20,
              category: 'beverages'
            },
            {
              id: 2,
              name: 'Acer Nitro',
              price: 9800000,
              stock:2,
            },
            {
              id: 3,
              name: 'Jacket',
              price: 150000,
              stock:10,
              category: 'clothing'
            },
        ]
        //Filter yang ada category
        const isExistCategory: ProductInterface[] = productList.filter(i => i.category)
        console.info('List yang ada kategori: ', isExistCategory)
        expect(isExistCategory).toHaveLength(2)
        const isNotExistCategory: ProductInterface[] = productList.filter(i => !i.category)
        console.info('List yang tidak ada kategori: ', isNotExistCategory)
        expect(isNotExistCategory).toHaveLength(1)
        
    })
 })