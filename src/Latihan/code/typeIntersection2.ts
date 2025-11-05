type Mahasiswa = {
    kind: 'mahasiswa',
    npm: string,
    prodi: string
}
type Dosen = {
    kind: 'dosen',
    nidn: string,
    matkul: string
}

export type OrangKampus = (Mahasiswa | Dosen) & {name: string} // Type Narrowing
