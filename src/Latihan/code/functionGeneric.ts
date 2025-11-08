export function getLast<T>(val: T[]): T | undefined{
    return val[val.length - 1];
}

export function mergeObj<T, U>(a: T, b: U): T & U{
    return {...a, ... b}
}