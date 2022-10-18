import { useContext, useState } from "react";

import { LoginContext } from "../../contexts/LoginContext";
import LoginPage from "../../components/Login";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
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
            <input
                type="text" value={user.name} placeholder="nome"
                onChange={e =>
                    setUser({ ...user, name: e.target.value })
                } disabled={disabled} />
            <input
                type="text" value={user.image} placeholder="foto"
                onChange={e =>
                    setUser({ ...user, image: e.target.value })
                } disabled={disabled} />

            <input type="submit" value="Enviar" disabled={disabled} />

            <p onClick={() => {
                navigate("/");
                setUser({ email: "", password: "" });
            }}>
                Já tem uma conta? Faça login!
            </p>
        </LoginPage>
    );
};

export default SignIn;