import axios from "axios";

export const useApi = ()=>{
    const api = axios.create()
    api.defaults.baseURL = "https://master.demo.sylius.com/api/v2/"
    api.defaults.headers["accept"]= "application/json"
    return(api)
}