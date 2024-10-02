import apiSlice from "./apiSlice";
export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllCourses: builder.query({
            query: () => ({
                url: '/course/allcourses',
                method: 'GET',
            }),
        }),
    }),
});

export const { useGetAllCoursesQuery } = userApiSlice;