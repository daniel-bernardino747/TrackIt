import axios from "axios";

const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit"

export const postUser = (action, config) => {
    const promise = axios.post(`${url}/auth/${action}`, config);
    return promise;
}

export const createHabit = (body, config) => {
    const promise = axios.post(`${url}/habits`, body, config);
    return promise;
}