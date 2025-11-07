import { Book, BorrowedBook } from "../code/Book"
import { EBook } from "../code/EBook"

describe('Book Class', () => { 
    it("should support getter and setter", ()=>{
        const buku1 = new Book('Malin Kundang', 'anonimus')
        console.log(buku1)
        buku1.tahunBuku = 1990
        console.log(buku1)
        // buku1.available = false
        buku1.statusBuku = false
        console.log(buku1.infoBuku)
    })
    it("should support inheritance class for EBook", ()=>{
        const ebook1 = new EBook('Bumi', 'tere liye', 20)
        console.info(ebook1)
        ebook1.tahunBuku = 1990
        console.info(ebook1.infoBuku)
        ebook1.tahunBuku = 2014
        // ebook1.available = false //-> now protected field
        ebook1.statusBuku = false //setter status
        // ebook1.statusBuku = true
        console.info(ebook1)
        console.info(ebook1.infoBuku)
    })
    it("should support inheritance class for BorrowedBook", ()=>{
        const borrowBook = new BorrowedBook('Bumi', 'tere liye', '7 Nov', '11 Nov')
        console.info(borrowBook.getBorrowInfo())
    })
 })