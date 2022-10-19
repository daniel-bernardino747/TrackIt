import axios from "axios";

const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit";

export const getHabits = (config) => {
    return axios.get(`${url}/habits`, config);
}