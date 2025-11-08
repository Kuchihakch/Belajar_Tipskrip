import { Mahasiswa } from "../code/Student"

describe('class Mahasiswa', () => { 
    it("Should support getter and private prop", ()=>{
        const mhs1 = new Mahasiswa('felienz', 'mhs-01', 3.8)
        // mhs1.ipk = 4 //private
        expect(mhs1.mahasiswaIPK).toBe(3.8)
        console.info(mhs1.mahasiswaInfo)
        Mahasiswa.infoKampus()
    })
    it("Should support inheritance & override method", ()=>{
        class MahasiswaAktif extends Mahasiswa{
            override get mahasiswaInfo():string{
                return super.mahasiswaInfo + ' mahasiswa aktif'
            }
        }
        const mhs2 = new MahasiswaAktif('felienz', 'mhs-01', 3.8)
        console.info(mhs2.mahasiswaInfo)
    })
 })