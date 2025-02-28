export enum statusType {
    toFetch = 'toFetch',
    loading = 'loading',
    error = 'error',
    ok = ''
}

export interface ICrust extends ISignature<number> {
    cheesy: number
    cheesySausage: number
}

export interface IPizza {
    id: number
    name: string
    ingredients: string[]
    img: string
    price: {
        default: number
        size: {
            small: number
            medium: number
            large: number
        }
        crust?: ICrust
    }
    classifications: {
        new: boolean
        spicy: boolean
        vegetarian: boolean
    }
}

export interface ISelectedPizza extends ISignature<IPizza | number | string> {
    pizza: IPizza
    quantity: number
    price: number
    size: string
    crust: string
}

export interface ISignature<T> {
    [key: string]: T
}

export interface IPizzaCategory {
    id: number
    title: string
}
