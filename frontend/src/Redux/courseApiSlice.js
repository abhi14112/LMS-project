import apiSlice from "./apiSlice";
export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllCourses: builder.query({
            query: () => ({
                url: '/course/allcourses',
                method: 'GET',
            }),
        }),
        createCourse: builder.mutation({
            query: (newCourse) => ({
                url: '/course/create',
                method: 'POST',
                body: newCourse,
            }),
        }),
    }),
});

export const { useGetAllCoursesQuery, useCreateCourseMutation } = userApiSlice;