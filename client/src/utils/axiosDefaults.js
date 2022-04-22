import axios from "axios";

export const setAxiosDefaults = (token) =>{
    axios.defaults.headers["authorization"] = token;
}