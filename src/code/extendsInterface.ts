export enum Gender{
    MALE = "Male",
    FEMALE = "Female"
}
export enum Role{
    LECTURE = 'Lecture',
    STUDENT = 'Student',
    ADMIN = 'Admin'
}

export interface CivitasAkademika{
    id: string | number,
    name: string,
    age: number,
    gender: Gender,
    role: Role
}

export interface Course{
    id: string | number,
    name: string,
    duration: number
}

export interface Mahasiswa extends CivitasAkademika{
    Course: string,
    Semester: number,
    learning(courses: Course[]):string
}

export interface Dosen extends CivitasAkademika{
    Course: string,
}