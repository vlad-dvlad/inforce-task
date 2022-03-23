import axios from "axios";

export const postsAPI = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/"
});