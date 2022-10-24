import { COLOR } from '../../constants/Colors';
import styled from 'styled-components';

const Login = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 23.4375em;
    margin: 4.25em 0;
    gap: 1.25em;

    img {
        width: 11.25em;
    }
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.375em;

    input {
        width: 18.9375em;
        height: 2.8125em;
        border-radius: 0.3125em;
        font-size: 1.25em;
        padding: 0 0.5em;
    }

    p {
        margin: 1.25em 0;
        color: ${COLOR.bgButton};
        font-size: 0.875em;
        text-align: center;
        text-decoration: underline;
        cursor: pointer;
    }

    input[type="text"],
    input[type="password"] {
        border: 1px solid ${COLOR.borderInput};
        background-color: ${COLOR.bgWhite};

        &::placeholder {
            color: ${COLOR.daySelected};
        }

        &:disabled {
            color: ${COLOR.textDisabled};
            background: ${COLOR.bgGray};
        }
    }

    input[type="submit"] {
        border: none;
        color: ${COLOR.bgWhite};
        background: ${COLOR.bgButton};

        &:hover {
            background: ${COLOR.hoverButton};
        }
    }
`;

export { Login, Form };