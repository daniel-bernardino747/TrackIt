import axios from "axios";

const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit"

export const postUser = (action, body) => {
    axios
        .post(`${url}/auth/${action}`, body)
        .then(ans => console.log("enviou", ans))
        .catch(err => console.log("não enviou", err));
}