import React from "react";
import blogData from "../data/blog";
import Header from "./header";

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header blogName ={blogData.name}/> 
    </div>
  );
}

export default App;
