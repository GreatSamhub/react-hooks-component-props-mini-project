import React from "react";

function Article({ blogTitle, blogDate = "January 1, 1970", blogPreview }){
    return(
        <article>
            <h3>{blogTitle}</h3>
            <small>{blogDate}</small>
            <p>{blogPreview}</p>
        </article>
    )
}

export default Article