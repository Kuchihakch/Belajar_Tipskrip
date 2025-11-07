interface BorrowAble{
    borrowDate: string,
    returnDate: string,
    getBorrowInfo: ()=> string
}

export class Book{
    /* title: string;
    author: string; */
    //definisi via param prop
    private year?: number; //skrg private access vua set
    protected available: boolean = true; //visibility access only via set (private), protected -> via parent/child class
    constructor(public title: string, public author: string){ //param properties -> menggantikan definisi param propeties
    //definisi via param prop
    }
    get infoBuku():string{
        if(this.year){
            return `Buku ${this.title} karya ${this.author}, terbit ${this.year}. [status]: ${this.available ? 'tersedia' : 'tidak tersedia'}`
        }
        return `Buku ${this.title} karya ${this.author}. [status]: ${this.available ? 'tersedia' : 'tidak tersedia'}`
    }
    set statusBuku(v: boolean){
        if(v !== this.available){
            this.available = v
        } //kalau false -> ganti false. kalau true tidak perlu
    }
    set tahunBuku(v:number){
        if(v >= 2000){
            this.year = v
        }else{
            this.year = 2000
        }
    }
}

export class BorrowedBook extends Book implements BorrowAble{
    borrowDate: string;
    returnDate: string;
    constructor(title:string, author: string, borrowdate: string, returnDate: string){
        super(title, author)
        this.borrowDate = borrowdate;
        this.returnDate = returnDate
    }
    getBorrowInfo():string{
        return `[${this.title}] by ([${this.author}]) - dipinjam pada ${this.borrowDate}, dikembalikan pada ${this.returnDate}`
    }
}