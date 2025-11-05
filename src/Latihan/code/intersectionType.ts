interface Address{
    city: string,
    postalCode: string | number
}
interface User{
    name: string,
    email: string
}

export type UserwithAddress = User & Address