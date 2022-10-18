import { useContext, useState } from "react";

import { LoginContext } from "../../contexts/LoginContext";
import LoginPage from "../../components/Login";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const { user, setUser, disabled } = useContext(LoginContext);
    const navigate = useNavigate();

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
            <input type="submit" value="Enviar" disabled={disabled} />

            <p onClick={() => {
                navigate("/cadastro");
                setUser({ email: "", password: "", name: "", image: "" });
            }}>
                Não tem uma conta? Cadastre-se!
            </p>
        </LoginPage>
    );
};

export default Login;