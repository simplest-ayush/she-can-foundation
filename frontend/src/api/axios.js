import axios from "axios";
const instance = axios.create({
    baseURL: "https://she-can-foundation-c1rg.onrender.com",
    withCredentials: true
});
export default instance;
