import { baseApi } from "../baseApi";

const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        register: builder.mutation({
            query: (data) => ({
                url: '/users/register',
                method: 'POST',
                body: data,
            }),
        }),

        login: builder.mutation({
            query: (data) => ({
                url: '/auth/login',
                method: 'POST',
                body: data,
            }),
        }),
    }),
});

export const { useRegisterMutation, useLoginMutation } = authApi;
export default authApi;
