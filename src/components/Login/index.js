import { Form, Login } from './style';
import { useContext, useMemo, useState } from "react";

import { LoginContext } from "../../contexts/LoginContext";
import Logo from "../../assets/images/logoTrackIt.svg";
import { postUser } from "../../services/POST";
import { useNavigate } from "react-router-dom";

const LoginPage = ({ children }) => {
    const { user, setUser, disabled, setDisabled } = useContext(LoginContext);
    const [reaload, setReload] = useState(false)
    const navigate = useNavigate();

    useMemo(() => navigate("/hoje"), [reaload])

    const submitUser = (e) => {
        e.preventDefault();
        const isLogin = (e.target.length === 3)

        setDisabled(true);

        if (isLogin) {
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
                    setReload(!reaload);
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

export default LoginPage;