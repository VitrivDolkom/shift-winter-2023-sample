import axios from 'axios'

const BASE_URL = 'https://shift-winter-2023-backend.onrender.com/api/pizza'

export const pizzaIstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        Accept: 'application/json'
    }
})
