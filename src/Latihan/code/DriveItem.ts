export type FileItem = {
    filename: string,
    size: number
}
export type FolderItem = {
    foldername: string,
    children: number
}

export type DriveItem = FileItem | FolderItem