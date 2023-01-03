import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const apiURL = "https://asweb.store";
// const apiHost = "http://localhost:4000";

export const emailAPI = createApi({
    reducerPath: "emailAPI",

    baseQuery: fetchBaseQuery({
        baseUrl: apiURL
    }),
    tagTypes: ['Post'],

    endpoints: (builder) => ({
        createEmail: builder.mutation({
            query: (email) =>({
                url:'/newsletter/create',
                method: 'POST',
                body: email,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
        }),
        createContact:  builder.mutation({
            query: (userContact) =>({
                url:'/form/contact',
                method: 'POST',
                body: userContact,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
        })
    })
})

export default emailAPI;
export const {useCreateEmailMutation, useCreateContactMutation} = emailAPI;