import { LoginContext } from "../contexts/LoginContext";
import Logo from "../assets/images/logoTrackIt.svg";
import { postUser } from "../services/POST";
import styled from 'styled-components';
import { useContext } from "react";

const LoginPage = ({ children }) => {
    const { user, disabled, setDisabled } = useContext(LoginContext);

    function submitUser(e) {
        e.preventDefault();
        console.log(user);

        setDisabled(!disabled)

            (e.target.length === 3)
            ? postUser("login", user)
            : postUser("sign-up", user)

    };

    return (
        <Login>
            <img src={Logo} />
            <Form onSubmit={submitUser}>
                {children}
            </Form>
        </Login>
    );
};

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

        &:disabled {
            opacity: 0.7;
        }
    }
`;

export default LoginPage;