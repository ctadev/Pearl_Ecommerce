import { createSlice } from "@reduxjs/toolkit";

const apiSlice = createSlice({
    name: "apiSlice",
    initialState: "https:rapidapi.com/job/search/21321321312",
    reducers: {
        searchJob: (state, action) => {
            state = action.payload.link
          },
    }
})