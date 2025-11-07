export class Book{
    title: string;
    author: string;
    year?: number;
    protected available: boolean = true; //visibility access only via set (private), protected -> via parent/child class
    constructor(title: string, author: string){
        this.title = title
        this.author = author
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
}