import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Card from "../Components/Card";

export const counterSlice = createSlice({
  name: "album",
  initialState: [],
  reducers: {
    updateState: (state, action) => {
      console.log(action.payload);
      // <Card props={action.payload} />;
      state.push(action.payload);
      console.log("this is state", state.value);
      // return state;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      // We can directly add the new post object to our posts array
      console.log(state, "this is state");
      state.length == 0 && state.push(...action.payload);
    });
  },
});

export const fetchPosts = createAsyncThunk("getPosts/fetchPosts", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/albums"
  );
  console.log(response);
  return response.data;
});

export const { updateState: setpost } = counterSlice.actions;

export default counterSlice.reducer;
