import axios from 'axios'

const BASE_URL = 'http://localhost:3000/api/pizza'

export const pizzaIstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        Accept: 'application/json'
    }
})
