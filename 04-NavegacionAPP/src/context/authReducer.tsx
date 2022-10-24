import { AuthState } from './AuthContext';

type AuthAction = 
    | { type: 'signIn' }
    | { type: 'changeFavIcon', payload: string}
    | { type: 'logOut'}
    | { type: 'changeUserName', payload: string}

export const authReducer = (state: AuthState, action: AuthAction) : AuthState => {

    switch(action.type){
        case 'signIn':
            return {
                ...state,
                isLoggedIn: true,
                username: 'no-username-yet'
            }
        
        case 'changeFavIcon':
            return {
                ...state,
                favoriteIcon: action.payload
            }

        case 'logOut':
            return {
                ...state,
                isLoggedIn: false,
                username: undefined,
                favoriteIcon: undefined
            }

        case 'changeUserName':
            return {
                ...state,
                username: action.payload
            }

        default: 
            return state
    }
}