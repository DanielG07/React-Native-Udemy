import React, { createContext, useReducer } from "react"
import { authReducer } from "./authReducer"

// Definir información que vamos a manejar
export interface AuthState {
    isLoggedIn: boolean,
    username?: string,
    favoriteIcon?: string
}

// Estado inicial
export const authInitialState : AuthState = {
    isLoggedIn: false,
    username: undefined,
    favoriteIcon: undefined
}

// Lo usaremos para decirle a React como luce y qué expone el context
export interface AuthContextProps {
    authState: AuthState,
    signIn: () => void
}

// Crear contexto
export const AuthContext = createContext({} as AuthContextProps)

// Componente que es el proveedor del estado
export const AuthProvider = ({ children }: any) => {

    const [authState, dispatch] = useReducer(authReducer, authInitialState)
    const signIn = () => {
        dispatch({type: 'signIn'})
    }
    
    return (
        <AuthContext.Provider
            value={{
                authState: authState,
                signIn: signIn
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}
