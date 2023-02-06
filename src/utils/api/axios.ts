import axios from 'axios'

export const instance = axios.create({ baseURL: 'https://shift-winter-2023-backend.onrender.com/api/pizza' })
