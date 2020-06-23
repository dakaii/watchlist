import * as types from './Types';

export const loginRequest = (params) => ({
    type: types.LOGIN_REQUEST,
    params,
});

// export const loginSuccess = (params) => ({
//     type: types.LOGIN_SUCCESS,
//     params,
// });

export const signupRequest = (params) => ({
    type: types.SIGNUP_REQUEST,
    params,
});

// export const signupSuccess = (params) => ({
//     type: types.SIGNUP_SUCCESS,
//     params,
// });
