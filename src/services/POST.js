import axios from "axios";

const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit"

export const postUser = (action, body) => {
    const promise = axios.post(`${url}/auth/${action}`, body);
    return promise
}