describe('Type Guard', () => { 
    it("should support type guard", ()=>{
        type Mahasiswa = {
            nim: string,
            name: string
        }
        type Dosen = {
            nidn: string,
            name:string
        }
        type Campus = Mahasiswa | Dosen
        function checkDosen(d: Campus): d is Dosen{
            // return !!(d as Dosen).nidn
            // return "nidn" in d //lebih jelas, aman untuk kasus nidn == ''
            return typeof (d as Dosen).nidn === 'string' && (d as Dosen).nidn.length > 0
        } // if nidn exist -> return truthy
        const personInCampus: Campus[] = [
            {
              nim: '012',
              name: 'kuchi'
            },
            {
              nim: '013',
              name: 'kazu'
            },
            {
              nidn: '001',
              name: 'felienz'
            }
        ]
        const isDosen: Dosen[] = personInCampus.filter(checkDosen)
        expect(isDosen).toHaveLength(1)
        console.info('daftar dosen: ', isDosen)
        function sapaPerson(p: Campus): string{
            if (checkDosen(p)){
                return `Halo bapak/ibu dosen, ${p.name}`
            }else{
                return `Halo ${p.name}`
            }
        }
        const p1:Dosen = {
              nidn: '001',
              name: 'felienz'
            }
        console.info('Sapa Orang Kampus: ', sapaPerson(p1))
    })
 })