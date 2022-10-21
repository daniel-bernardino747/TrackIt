import axios from "axios";

const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";

export const deleteHabitRequest = (id, config) => {
    return axios.delete(`${url}/${id}`, config);
}
