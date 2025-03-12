import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api-fresh-harvest.code-commando.com/api/v1'
    }),
    endpoints: () => ({}),
});

