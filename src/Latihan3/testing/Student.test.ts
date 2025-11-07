import type { Mahasiswa } from "../code/Student"

describe('Student Type', () => { 
    it("Should support type Aliasing", ()=>{
        function infoStudent(v: Mahasiswa):void{
            if(v.umur){
                console.log(`nama: ${v.nama}, usia: ${v.umur} ,Hobi: ${v.hobi}, Status: ${v.status}`)
            }else{
                console.log(`nama: ${v.nama}, Hobi: ${v.hobi}, Status: ${v.status}`)
            }
        }
        infoStudent({nama: 'felienz', isMahasiswa: true, umur: 21, hobi: ['code', 'game', 'anime'], status: 'aktif'})
        const student2: Mahasiswa ={
            nama: 'kazu',
            isMahasiswa: true,
            hobi: ['gt', 'fesnuk'],
            status: 'aktif'
        }
        infoStudent(student2)
    })
    it("Should support Type Guard",()=>{
        function checkAktif(m: Mahasiswa): m is Mahasiswa{
            return m.status === 'aktif'
        }
        const arrayMahasiswa: Mahasiswa[] = [
            {nama: 'felienz', isMahasiswa: true, umur: 21, hobi: ['code', 'game', 'anime'], status: 'lulus'},
            {nama: 'kuchi', isMahasiswa: true, umur: 21, hobi: ['game', 'anime'], status: 'aktif'},
            {
            nama: 'kazu',
            isMahasiswa: true,
            hobi: ['gt', 'fesnuk'],
            status: 'aktif'
            }
        ]
        const mahasiswaAktif: Mahasiswa[] = arrayMahasiswa.filter(checkAktif)
        console.info(mahasiswaAktif)
    })
 })