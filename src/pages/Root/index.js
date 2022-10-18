import { GlobalStyle } from "../../assets/GlobalStyle";
import { LoginContextProvider } from "../../contexts/LoginContext";
import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <>
            <GlobalStyle />
            <LoginContextProvider>
                <Outlet />
            </LoginContextProvider>
        </>
    );
};

export default Root;