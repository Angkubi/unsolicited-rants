import React from 'react';

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
                <p>{content}</p>
            </div>
        </article>
    );
}

export default BlogPost;
