import {ActionTypes, DispatchType} from './redux-store';
import {authApi} from '../../api/api';

export type ResponseDataType<T> = {
    resultCode: number,
    messages: string[],
    data: T
}
export type DataType = {
    id: string | null,
    email: string | null,
    login: string | null,
    isAuth: boolean,
    isLoading: boolean,

}

const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    isLoading: true
}

export const authReducer = (state: DataType = initialState, action: ActionTypes): DataType => {
    switch (action.type) {

        case 'SET-USERS-DATA':
            return {
                ...state,
                ...action.payload, isAuth: action.payload.isAuth
            };

        case 'SET-LOADING':
            return {
                ...state,
                isLoading: action.isLoading
            };

    }
    return state;
};


export const SetUserDataAC = (id: string | null, email: string | null, login: string | null, isAuth: boolean) => ({
    type: 'SET-USERS-DATA',
    payload: {id, email, login, isAuth}
} as const);

export const SetLoadingAC = (isLoading: boolean) => ({
    type: 'SET-LOADING',
    isLoading
} as const);


export const authUserThunk = () => {
    return (dispatch: DispatchType) => {
        authApi.me().then((data) => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data;
                dispatch(SetUserDataAC(id, email, login, true));
            }
            dispatch(SetLoadingAC(false))
        });
    };
};

export const logInUserThunk = (email: string, password: string, rememberMe: boolean) =>
    (dispatch: any) => {

        authApi.logIn(email, password, rememberMe).then(() => {
                dispatch(authUserThunk());
            }
        )
    };

export const logOutUserThunk = () =>
    (dispatch: DispatchType) => {
        authApi.logOut().then((data) => {
            if (data.data.resultCode === 0) {
                let {id, email, login} = data.data;
                dispatch(SetUserDataAC(id, email, login, false))
            }
        });
    };