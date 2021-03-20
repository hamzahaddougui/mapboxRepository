import { createSlice } from '@reduxjs/toolkit';
import { apiCallBegan } from '../../services/api';

import Router from 'next/router';
import axios from "axios";

const url = '/users/signup';

const instance = axios.create({
    withCredentials: true,
});

const slice = createSlice({
    name: "authentication",

    initialState: {
        loading: false,
        lastConnected: null,
        user: {}
    },

    reducers: {
        signUpRequested: (state, action) => {
            state.loading = true;
        },
        signUpFailed: (state, action) => {
            state.loading = false;
        },
        signUpSuccess: (state, action) => {
            state.loading = false;
            state.lastConnected = Date.now();
            Router.push("/");
            console.log(action.payload);
            state.user = action.payload;
        },
        responseSuccessGoogle : async response => {
            console.log("response google");
            console.log(response);
            const res = await instance.post("http://localhost:3001/api/users/signup-google", {
              tokenId: response.tokenId,
            });
            console.log(res);
        },
        responseFailureGoogle : response => {
            console.log("response google", response);
        },
    }
});

export const {
    signUpRequested,
    signUpFailed,
    signUpSuccess,
    responseSuccessGoogle,
    responseFailureGoogle
} = slice.actions;

export default slice.reducer;

export const SignUpAction = (data) => ( dispatch, getState ) => {
    
    dispatch(
        apiCallBegan({
            //url,
            onStart: signUpRequested.type,
            onSuccess: signUpSuccess.type,
            onError: signUpFailed.type,
            data,
            method: "POST"
        }),
    );
}