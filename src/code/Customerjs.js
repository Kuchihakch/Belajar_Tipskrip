export class Customerjs{
    //tidak perlu deklarasikan prop terlebih dahulu
    constructor(nama){
        this._nama = nama
    }
    getCustomerName(){
        return this._nama
    }
}

/* const customer1 = new Customer('Kuchiha');
console.info(customer1.getCustomerName()) */