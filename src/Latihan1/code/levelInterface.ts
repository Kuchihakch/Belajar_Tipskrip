export enum Level{
    BEGINNER = 'BEGINNER',
    INTERMEDIATE = 'INTERMEDIATE',
    ADVANCED = 'ADVANCED'
}
export interface newCourse{
    id: string,
    title: string,
    level: Level,
    tags?: string[]
}