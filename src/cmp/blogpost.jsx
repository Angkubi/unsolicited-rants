import React, { useEffect } from 'react';
import ReactMarkdown from 'react-markdown'; //using markdown

function BlogPost({ title, content, image }) {
    useEffect(() => {
        window.scrollTo({ top: 0 }); // to top without animation
    }, []); 

    return (
        <article className="blog-post">
            {image && (
                <div className="post-image-container">
                    <img src={image} alt={title} className="post-image" />
                </div>
            )}
            <div className="blog-post-content">
                <h2>{title}</h2>
                <ReactMarkdown>{content}</ReactMarkdown>
            </div>
        </article>
    );
}

export default BlogPost;
