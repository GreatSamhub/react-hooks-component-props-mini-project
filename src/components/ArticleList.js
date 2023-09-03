import React from "react";
import blogData from "../data/blog"
import Article from "./Article";

function ArticleList(){
    const posts= blogData.posts.map((post)=>(
        <Article 
          key= {post.id} 
          blogTitle={post.title}
          blogDate={post.date}
          blogPreview={post.preview}
        />
    ))
    return(
      <main>{posts}</main>

    )
}

export default ArticleList