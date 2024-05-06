import axios, { AxiosInstance } from "axios";

const request: AxiosInstance = axios.create({
    baseURL: 'http://135.181.108.207',
    headers: {
        "Content-Type": "application/json",
    }
});




export { request };