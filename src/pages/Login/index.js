import { useContext, useEffect } from "react";

import { LoginContext } from "../../contexts/LoginContext";
import LoginPage from "../../components/Login";
import { ThreeDots } from "react-loader-spinner";
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const { user, setUser, disabled, setDisabled } = useContext(LoginContext);
    const navigate = useNavigate();

    useEffect(() => {
        setDisabled(false);
    }, [])


    return (
        <LoginPage>

            <input
                type="text" value={user.email} placeholder="email"
                onChange={e =>
                    setUser({ ...user, email: e.target.value })
                } disabled={disabled} />
            <input
                type="password" value={user.password} placeholder="senha"
                onChange={e =>
                    setUser({ ...user, password: e.target.value })
                } disabled={disabled} />

            {disabled ? (
                <Loader>
                    <ThreeDots
                        height="80"
                        width="80"
                        radius="9"
                        color="#FFF"
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{}}
                        wrapperClassName=""
                        visible={true} />
                </Loader>
            ) : (
                <input
                    type="submit"
                    value="Enviar"
                    disabled={disabled} />
            )}


            <p onClick={() => {
                setUser({ email: "", password: "", name: "", image: "" });
                navigate("/cadastro");
            }}>
                Não tem uma conta? Cadastre-se!
            </p>
        </LoginPage>
    );
};

const Loader = styled.div`
    display: flex;
    opacity: 0.7;
    justify-content: center ;
    align-items: center;
    width: 303px;
    height: 45px;
    border-radius: 5px;
    background: #52B6FF;
`;

export default Login;