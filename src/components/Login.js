import { useContext, useEffect, useState } from "react";

import { LoginContext } from "../contexts/LoginContext";
import Logo from "../assets/images/logoTrackIt.svg";
import { postUser } from "../services/POST";
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";

const LoginPage = ({ children }) => {
    const { user, setUser, disabled, setDisabled } = useContext(LoginContext);
    const navigate = useNavigate();

    const submitUser = (e) => {
        e.preventDefault();

        setDisabled(true);

        if (e.target.length === 3) {
            postUser("login", user)
                .then(ans => {
                    setDisabled(!disabled);
                    setUser(
                        {
                            ...user,
                            password: ans.data.password,
                            email: ans.data.email,
                            name: ans.data.name,
                            image: ans.data.image,
                            id: ans.data.id,
                            config: {
                                headers: {
                                    Authorization: `Bearer ${ans.data.token}`
                                }
                            }
                        })
                    navigate("/habitos")
                })
                .catch(err => {
                    console.log(err)
                    alert(err);
                    setDisabled(false);
                })
        } else {
            postUser("sign-up", user)
                .then(() => {
                    setDisabled(false);
                    navigate("/");
                })
                .catch(err => {
                    alert(err.response.data.details);
                    setDisabled(false);
                })
        }
    }

    return (
        <Login>
            <img src={Logo} alt="Logo-TrackIt" />
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
    }
`;

export default LoginPage;