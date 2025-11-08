export class Mahasiswa{
    constructor(public nama: string, public nim: string, private ipk:number){}
    get mahasiswaInfo():string{
        return `Mahasiswa ${this.nama} - ${this.nim}`
    }
    get mahasiswaIPK():number{
        return this.ipk
    }
    public static infoKampus(): void{
        console.log('Kampus Informatika')
    }
}