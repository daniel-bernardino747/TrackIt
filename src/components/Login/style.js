import styled from 'styled-components';

const Login = styled.section`
    width: 375px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 68px 0;
    gap: 20px;

    img {
        width: 180px;
    }
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;

    input {
        width: 303px;
        height: 45px;
        border-radius: 5px;
        font-size: 20px;
    }

    p {
        margin: 20px 0;
        color: #52B6FF;
        font-size: 14px;
        text-align: center;
        text-decoration: underline;
        cursor: pointer;
    }

    input[type="text"],
    input[type="password"] {
        border: 1px solid #D5D5D5;
        background-color: #FFF;

        &::placeholder {
            color: #DBDBDB;
        }

        &:disabled {
            background: #F2F2F2;
            color: #AFAFAF;
        }
    }

    input[type="submit"] {
        border: none;
        color: #FFF;
        background: #52B6FF;

        &:hover {
            background: #40AEFE;
        }
    }
`;

export { Login, Form };