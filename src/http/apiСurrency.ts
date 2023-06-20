import axios from "axios";

export const apiCurrency = axios.create({
    baseURL: "https://min-api.cryptocompare.com/data"
})