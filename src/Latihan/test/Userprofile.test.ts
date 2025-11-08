describe('User Profile Class', () => { 
    it("Should Support getter & Setter", ()=>{
        class Userprofile{
            constructor(private username: string){}
            get nameInfo():string{
                return `Username: ${this.username}`
            }
            set profileName(v:string){
                if(v.length >= 4){
                    this.username = v
                }else{
                    throw new Error('Nama Harus String dan sekurang kurangnya 4 karakter')
                }
            }
        }
        try {
            const newUser = new Userprofile('kuchi')
            // newUser.username
            console.log(newUser.nameInfo)
            newUser.profileName = 'felienz'
            console.log(newUser.nameInfo)
            newUser.profileName = 'k'
        } catch (e:any) {
            console.log(e.message)
        }
    })
 })