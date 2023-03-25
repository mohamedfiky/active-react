import React, {useState, useEffect} from "react";
import axios from "axios";

import "./blog-page.css" ;

const BlogPage = ()=>{
    
    const [articles, setArticles] = useState([]) ;

    useEffect(()=>{

    // axios in a function component, to see it with a class component go to Portfolio-Page component
    
        axios
        .get("https://raw.githubusercontent.com/mohamedfiky/_FIKY_APIs/master/blog-portfolio-API/blog-portfolio-api.json")
        .then(res =>{setArticles(res.data)})

    },[]);

    const blogPosts = articles.map(article =>{
        return(

                <div className="article" key={article.id}>
                    <h3>{article.title}</h3>
                    <div className="meta-data">
                        <span className="author">{article.author}</span>
                        <span className="separator">/</span>
                        <span className="date">{article.date}</span>
                    </div>
                    <img src={article.imgUrl} />
                    <p>{article.content}</p>
                </div>
           
        );
    });

    return (
        <div className="blog-page">
            <div className="container">
                <h2 className="special-h">Our Blog</h2>
                <p>Information Worth Spreading</p>
                <div className="articles-box">
                    {blogPosts}
                </div>
            </div>
        </div>
    )
}

export default BlogPage ;

