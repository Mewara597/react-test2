// import axios from "axios";
// import { useEffect, useState } from "react";
import Card from "./Components/Card";
import { Route, Routes } from "react-router-dom";
// import { BrowserRouter } from "react-router-dom";

import Album from "./Components/Album";
// import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "./feature/counterSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state);

  useEffect(() => {
    users.length === 0 && dispatch(fetchPosts());
  }, [users]); //eslint-disable-line

  return (
    <div className="App">
      {/* <BrowserRouter> */}
      <Routes>
        <Route path="/" element={<Card />} />
        <Route path="/add" element={<Album />} />
      </Routes>
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
