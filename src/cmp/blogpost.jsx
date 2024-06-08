import React from 'react';
import ReactMarkdown from 'react-markdown'; //using markdown

function BlogPost({ title, content, image }) {
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
