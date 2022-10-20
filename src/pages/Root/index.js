import { GlobalStyle } from "../../assets/GlobalStyle";
import { LoginContextProvider } from "../../contexts/LoginContext";
import { Outlet } from "react-router-dom";
import { ProgressContextProvider } from "../../contexts/ProgressContext";

const Root = () => {
    return (
        <>
            <GlobalStyle />
            <LoginContextProvider>
                <ProgressContextProvider>
                    <Outlet />
                </ProgressContextProvider>
            </LoginContextProvider>
        </>
    );
};

export default Root;