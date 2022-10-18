import { createContext, useState } from "react";

export const LoginContext = createContext();

export function LoginContextProvider({ children }) {
    const [user, setUser] = useState({ email: "", password: "" });
    const [disabled, setDisabled] = useState(false);

    return (
        <LoginContext.Provider value={{ user, setUser, disabled, setDisabled }}>
            {children}
        </LoginContext.Provider>
    )
};