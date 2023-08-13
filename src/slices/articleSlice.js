// slice for the contents of the article that the api returns

import { createSlice } from "@reduxjs/toolkit";

const articleSlice = createSlice({
    name: "article",
    initialState: {
        article: false,
    },
    reducers: {
        setArticle: (state, action) => {
            state.article = action.payload;
        }
    }
});

export const {setArticle} = articleSlice.actions;
export default articleSlice.reducer;