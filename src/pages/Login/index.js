import { useContext, useEffect } from "react";

import Loader from "../../components/Loader";
import { LoginContext } from "../../contexts/LoginContext";
import LoginPage from "../../components/Login";
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
                <Loader />
            ) : (
                <input type="submit" value="Enviar" disabled={disabled} />
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

export default Login;