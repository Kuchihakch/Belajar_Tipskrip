import type { product, user } from "../code/typeAlias"

describe('Type Alias', () => { 
    it('Should Match With Type Property', ()=> {
        const user: user={
            id: '1234',
            name:'FelienZ',
            age:21,
            email: 'felienz@gmail.com',
            detail: "A Javascript Developer",
            gender:'man'
        }
        // user.scam = false //Tidak ada properti ini
        /* const product: product ={
            // id:12345,
            name: 'Iphone 16',
            price:15000000,
            // detail: {description: 'Mahal Wok'},
            // stock:7
        } */
        const product: product ={
            id:'12345',
            name: 'Iphone 16',
            price:15000000,
            detail: {description: 'Mahal Wok'},
            stock:7
        }
        console.info(user)
        console.info(product)
    })
 })