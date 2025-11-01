import { productType, type product } from "../code/productAlias"

describe('Product Alias', () => { 
    it("Should have value type match with product Alias", ()=>{
        let itemA: product={
            name: 'Hape',
            id: '123',
            price: 1000000,
            category: productType.ELECTRONIC,
            stock: 5
        }
        console.info(itemA)
        expect(itemA.category).toBe("ELECTRONIC")
        //invalid case -> inconsistent value type
        /* let itemB: product={
            name: 'Baju Batik',
            id: 'abc',
            price: 500000,
            category: productType.BAJU,
            stock: '5'
        } */
        //yang benar
        let itemB: product={
            name: 'Baju Batik',
            id: 'abc',
            price: 500000,
            category: productType.CLOTHING,
            stock: 2
        }
        console.info(itemB)
        expect(itemB.category).toBe("CLOTHING")
        //mismatch case, baju-> elektronik (testing)
        let itemC: product={
            name: 'Baju Batik',
            id: 'abc',
            price: 500000,
            category: productType.ELECTRONIC,
            stock: 3
        }
        console.info(itemC)
        expect(itemC.category).toBe("CLOTHING")
        //aman typing, fatal testing
    })
 })