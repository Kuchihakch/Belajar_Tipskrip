export class Customer{
    //deklarasikan prop terlebih dahulu
    //mandatory prop (wajib)
    private id: string | number;
    private nama: string;
    //opt prop + default
    private membership?: 'premium' | 'guest' = 'guest';
    
    constructor(id: string | number, nama: string){
        this.id = id
        this.nama = nama;
    }
    getCustomerName(): string{
        return this.nama;
    }
    getCustomerMembership(): string{
        return this.membership ? this.membership : 'guest'
    }
    getCustomerInfo(): string{
        return `[${this.id}] - [Nama]: ${this.nama}, [Membership]: ${this.membership}`
    }
}

/* const customer = new Customer('Kuchi')
console.log(customer.getCustomerName()) */