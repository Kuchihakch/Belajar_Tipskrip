type mahasiswa = {kind: 'pelajar', belajar: ()=> string}
type dosen = {kind: 'pengajar', mengajar: ()=> string}

export type Anggota = mahasiswa | dosen