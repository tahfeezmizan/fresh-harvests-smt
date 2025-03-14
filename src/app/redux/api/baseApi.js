import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const baseApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api-fresh-harvest.code-commando.com/api/v1',

        prepareHeaders:(headers, {getState}) => {
            const token = localStorage.getItem('token');
            if(token) {
                headers.set("authorization", token)
            }
        }
    }),
    endpoints: () => ({}),
});

// const baseQuery = fetchBaseQuery({
//     baseUrl: SERVER_BASE_URL,
//     prepareHeaders: (headers, { getState }) => {

//         const token = localStorage.getItem('room_token');
//         if (token) {
//             // headers.set('authorization', `${token}`);
//             headers.set('authorization', token);
//         }

//         return headers;
//     },
// });