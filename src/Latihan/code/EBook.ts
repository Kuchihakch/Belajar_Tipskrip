import { Book } from "./Book";

export class EBook extends Book{
    // fileSize: number
    constructor(title:string, author: string, public fileSize:number){
        super(title, author)
        // this.fileSize = fileSize
    }
    override get infoBuku():string{
        return `${super.infoBuku}, ukuran: ${this.fileSize}MB`;
    }
    /* override set statusBuku(v: boolean){
        if(v !== this.available){
            super.statusBuku = v
        }
    }  *///tidak ubah behavior setter lama -> tidak perlu definisikan lagi
}