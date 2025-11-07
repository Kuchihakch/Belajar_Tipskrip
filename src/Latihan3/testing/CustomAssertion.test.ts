describe('Custom Assertion', () => { 
    it("Should support custom assertions", ()=>{
        let data: unknown = JSON.parse('{"nama":"FelienZ","id":7}')

        function checkName(d: unknown): d is object{
            return (d as object).nama
        } //paksa percaya ini objek

        //lebih amannya
        function saveCheckname(d: unknown): unknown{
            /* if(typeof d === 'object' && d !== null){
                return d?.nama
            }else{
                return d
            } */
            if(typeof d === 'object' && d!== null && 'nama' in d && typeof (d as any).nama === 'string') {
                return d.nama
            }//buset pengecekan lengkap
            else{
                return d
            }
        }
        console.log(checkName(data))
        //semisal ternyata bukan objek, tapi langsung string
        let falseData:string = 'scam'
        console.log(checkName(falseData)) //undefined
        //save assertion
        console.log(saveCheckname(data))
        //semisal ternyata bukan objek, tapi langsung string
        console.log(saveCheckname(falseData)) //scam
    })
 })