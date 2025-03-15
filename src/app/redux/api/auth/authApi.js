import { baseApi } from "../baseApi";

const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        // users endpoints
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
        getAllUsers: builder.query({
            query: () => "/users",
        }),
        
        profile: builder.query({
            query: () => ({
                url: "/auth/profile",
                method: "GET",
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            }),
        }),
        updateProfile: builder.mutation({
            query: (data) => ({
                url: "/users/profile",
                method: "PUT",
                body: data,
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            }),
        }),
        updateUserById: builder.mutation({
            query: ({ id, data }) => ({
                url: `/users/${id}`,
                method: "PUT",
                body: data,
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            }),
        }),

        // products endpoints
        allProducts: builder.query({
            query: () => "/products",
        }),
        getProductsById: builder.query({
            query: (id) => `/products/${id}`,
        }),


        //category endpoints
        allCategory: builder.query({
            query: () => "/category",
        }),
        getCategoryById: builder.query({
            query: (id) => `/category/${id}`,
        }),
        updateCategoryById: builder.mutation({
            query: ({ id, data }) => ({
                url: `/category/${id}`,
                method: "PUT",
                body: data,
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            }),
        }),
        deleteCategoryById: builder.mutation({
            query: (id) => ({
                url: `/category/${id}`,
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            }),
        }),
    }),
});

export const {
    useRegisterMutation,
    useLoginMutation,
    useProfileQuery,
    useGetAllUsersQuery,
    useUpdateProfileMutation,
    useUpdateUserByIdMutation,
    useGetCategoryByIdQuery,
    useUpdateCategoryByIdMutation,
    useDeleteCategoryByIdMutation,
    useAllProductsQuery,
    useAllCategoryQuery,
    useGetProductsByIdQuery
} = authApi;

export default authApi;
