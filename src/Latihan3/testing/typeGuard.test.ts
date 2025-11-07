describe('Type Guard', () => { 
    it("Should support type guard", ()=>{
        type Pengguna = { username: string, aktif: boolean }
        type SuperAdmin = Pengguna & { super: true }

        function isSuperAdmin(v: Pengguna | SuperAdmin): v is SuperAdmin{
            // return (!!(v as SuperAdmin).super) //paksa SAdmin
            return 'super' in v && v.super === true
        }
        
        const dataUser: (Pengguna | SuperAdmin)[] = [
            {username: 'kazu', aktif:true},
            {username: 'felienz', aktif:true, super: true},
            {username: 'kuchi', aktif:true},
        ]
        console.log(dataUser.filter(isSuperAdmin))
    })
    it("Should support complex type Guard", ()=>{
        type Sukses = { status: "ok", data: number[] }
        type Gagal = { status: "error", error: string }
        /* function checkStatusSuccess(s: Sukses | Gagal): s is Sukses{
            return (s as Sukses).status === 'ok'
        } */
        const dataStatus: (Sukses | Gagal)[] = [
            {status: 'error', error: '404'},
            {status: 'ok', data: [1, 2 , 3, 4]},
            {status: 'error', error: '409'},
        ]
        function handleResponse(s: Sukses | Gagal):void{
            if(s.status === 'ok'){
                return s.data.forEach(i => console.log(i))
            }else{
                console.log(`Error - ${s.error}`)
            }
        }
        dataStatus.forEach(handleResponse)
    })
 })