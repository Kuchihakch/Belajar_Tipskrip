export type Mahasiswa = {
    nama: string,
    umur?: number,
    isMahasiswa: boolean,
    hobi: string[],
    status: 'cuti' | 'aktif' | 'lulus',
}