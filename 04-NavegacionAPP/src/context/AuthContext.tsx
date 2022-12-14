import React, { createContext, useReducer } from "react"
import { authReducer } from "./authReducer"

export interface AuthState {
    isLoggedIn: boolean,
    username?: string,
    favoriteIcon?: string
}

export const authInitialState : AuthState = {
    isLoggedIn: false,
    username: undefined,
    favoriteIcon: undefined
}

export interface AuthContextProps {
    authState: AuthState,
    signIn: () => void,
    changeFavIcon: (iconName: string) => void,
    logOut: () => void,
    changeUsername: (username: string) => void
 }

export const AuthContext = createContext({} as AuthContextProps)

export const AuthProvider = ({ children }: any) => {

    const [authState, dispatch] = useReducer(authReducer, authInitialState)
    const signIn = () => {
        dispatch({type: 'signIn'})
    }
    const changeFavIcon = (iconName: string) => {
        dispatch({type: 'changeFavIcon', payload: iconName})
    }

    const logOut = () => {
        dispatch({type: 'logOut'})
    }
    
    const changeUsername = (username: string) => {
        dispatch({type: 'changeUserName', payload: username})
    }

    return (
        <AuthContext.Provider
            value={{
                authState: authState,
                signIn: signIn,
                changeFavIcon: changeFavIcon,
                logOut: logOut,
                changeUsername: changeUsername
                
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}
