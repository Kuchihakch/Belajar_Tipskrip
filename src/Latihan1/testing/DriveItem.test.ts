import type { DriveItem, FileItem } from "../code/DriveItem"

describe('Drive Item', () => { 
    it("Should match type with DriveItem Type via Type Guard", ()=>{
        const Item: DriveItem[] = [
            {
                filename: 'Kimi no Nawa',
                size: 1970
            },
            {
                filename: 'SAO S1 - Eps 1',
                size: 128
            },
            {
                filename: 'Annyeong? naya!',
                size: 1560
            },
            {
                foldername: 'Koleksi Anime',
                children: 10
            },
            {
                foldername: 'Koleksi Drakor',
                children: 3
            }
        ]
        function isFile(files: DriveItem): files is FileItem{
            return !!(files as FileItem).filename //cek apakah ada filename -> return truthy/falsy
        }
        function describeItem(item: DriveItem):string{
            if(isFile(item)){
                return `Ini Adalah File`
            }else{
                return `Ini Adalah Folder`
            }
        }
        const listFile= Item.filter(isFile)
        console.info('List File: ', listFile)
        const itemA = {
                filename: 'Kimi no Nawa',
                size: 1970
            }
        const itemB = {
                foldername: 'Koleksi Anime',
                children: 10
            }
        console.log('Cek tipe A: ', describeItem(itemA))
        expect(describeItem(itemA)).toBe('Ini Adalah File')
        console.log('Cek tipe B: ', describeItem(itemB))
        expect(describeItem(itemB)).toBe('Ini Adalah Folder')
    })
 })