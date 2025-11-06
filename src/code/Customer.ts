export class Customer{
    //deklarasikan prop terlebih dahulu
    private _nama: string;
    constructor(nama: string){
        this._nama = nama;
    }
    getCustomerName(){
        return this._nama;
    }
}

/* const customer = new Customer('Kuchi')
console.log(customer.getCustomerName()) */