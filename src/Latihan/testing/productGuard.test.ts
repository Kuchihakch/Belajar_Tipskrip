import type { Digital, newProduct } from "../code/productTypeGuard"

describe('Product Type Guard', () => { 
    it("should have prop type match with newProduct type", ()=>{
        const item: newProduct[] = [
            {
                kind: 'physical',
                name: 'Guitar',
                weight: 2
            },
            {
                kind: 'digital',
                name: 'GTA V',
                fileSize: 90
            },
            {
                kind: 'service',
                name: 'Rental Mobil',
                duration: 7
            }
        ]
        function isDigital(p: newProduct): p is Digital{
            return p.kind === 'digital'
        }
        const digitalProduct = item.filter(isDigital)
        expect(digitalProduct).toHaveLength(1)

        function describeProduct(p: newProduct): string{
            switch(p.kind){
                case "physical":
                    return `produk ${p.name}(${p.kind}) punya berat ${p.weight}`
                case "digital":
                    return `produk ${p.name}(${p.kind}) punya ukuran ${p.fileSize}`
                case "service":
                    return `produk ${p.name}(${p.kind}) berdurasi ${p.duration}`
            }
        }
        const productDigi:string = describeProduct({
                kind: 'digital',
                name: 'GTA V',
                fileSize: 90
            })
        console.info(productDigi)
        expect(productDigi).toBe('produk GTA V(digital) punya ukuran 90')
    })
 })