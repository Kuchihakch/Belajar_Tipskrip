type Buku = {judul: string, penulis: string, tahun: number}
describe('Util types', () => { 
    //1. untuk Partial<type> -> buat semua prop jadi optional?
    //2. untuk Pick<type,key> -> Ambil hanya beberapa prop dari Type
    //3 Required<type> -> ubah semua jadi wajib ada (opt -> wajib)
    //4. Omit<type, key> -> Hapus prop tertentu lalu ambil
    //5. Readonly<type> -> hanya dapat dikses, tidak dapat diubah setelah didefinisikan
    //6. Record<string, data> -> buat objek key-val dengan tipe dynamic
    //7. ReturnType -> mendapatkan tipe return func
    it("Should support Partial Type", ()=> {
        const bukuBaru: Partial<Buku> = {judul: 'Bumi'}
        console.log(bukuBaru)
        // const bukuLama: Buku = {judul: 'Bumi'} //harus lengkap
    })
    it("Should support Pick and Omit", ()=>{
        type BukuPreview = Pick<Buku, "judul" | "tahun"> 
        const newBook: BukuPreview = {judul: 'Bumi', tahun: 2014}
        console.log(newBook)
        newBook.judul = 'bulan'
        newBook.tahun = 2015
        console.log(newBook)
        type BukutanpaTahun = Omit<Buku, "tahun">
        const newBook2: BukutanpaTahun = {judul: 'Bumi', penulis: 'tere liye'}
        console.log(newBook2)
    })
    it("Should support Record", ()=> {
        type DaftarBuku = Record<string, Buku> 
        const newBook: DaftarBuku = {
            '1': {judul: 'Bumi', penulis: 'tereLiye', tahun: 2014},
            '2': {judul: 'Bulan', penulis: 'tereLiye', tahun: 2015},
            '3': {judul: 'Janji', penulis: 'tereLiye', tahun: 2021},
        }
        for (const buku in newBook) {            
            console.log(newBook[buku])
        }
    })
    it("Should support Readonly", ()=>{
        const data:Readonly<Buku> = {judul: 'Janji', penulis: 'tereLiye', tahun: 2021}
        // data.judul = 'not permitted' //read-only
        console.log(data)
    })
 })