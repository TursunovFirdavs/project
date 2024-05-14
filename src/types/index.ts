export interface loginType {
    phone_number: string,
    password: string
}

export interface subCategory {
    id: number,
    image: string,
    title: string
}

export interface banner {
    created_at: string,
    description: string,
    id: number,
    image: string,
    title: string,
    updated_at: string
}

export interface product_images {
    image: string,
    id: number
}