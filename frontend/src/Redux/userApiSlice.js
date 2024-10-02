import apiSlice from "./apiSlice";
export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: '/user/login',
                method: 'POST',
                body: data,
            }),
        }),
        register: builder.mutation({
            query: (data) => ({
                url: '/user/register',
                method: 'Post',
                body: data,
            })
        })
    }),
});

export const { useLoginMutation, useRegisterMutation } = userApiSlice;