import React from "react";

function About({ blogAbout, blogImage="https://via.placeholder.com/215"  }){
    return(
        <aside>
            <p>{blogAbout}</p>
            <img src= {blogImage} alt= "blog logo"/>
        </aside>
    )
}

export default About