import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import React from "react";

export const counterSlice = createSlice({
  name: "album",
  initialState: [],
  reducers: {
    updateState: (state, action) => {
      // <Card props={action.payload} />;
      state.push(action.payload);
      // return state;
    },
    deleteState: (state, action) => {
      state.forEach((a,index)=>{
        if(a.id=== action.payload){
          state.splice(index, 1);
        }
      })
    },
    editState: (state, action) => {
      state.forEach((a,index)=>{
        if(a.id=== action.payload){
          React.createElement('<input type="text" placeholder="Enter value here"> </input>')
        }
      })
    }
  },
  extraReducers(builder) {
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      // We can directly add the new post object to our posts array
      state.length === 0 && state.push(...action.payload);
    });
  },
});

export const fetchPosts = createAsyncThunk("getPosts/fetchPosts", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/albums"
  );
  response.data.splice(0,90) 
  return response.data;
});

export const { updateState: setpost, deleteState:updatePost, editState: editPost } = counterSlice.actions;

export default counterSlice.reducer;
