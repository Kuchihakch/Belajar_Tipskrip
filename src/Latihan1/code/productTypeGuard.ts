export type Physical = {
    kind: 'physical',
    name: string,
    weight: number
}
export type Digital = {
    kind: 'digital',
    name: string,
    fileSize: number
}
export type Service = {
    kind: 'service',
    name: string,
    duration: number
}
export type newProduct = Physical | Digital | Service