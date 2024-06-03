import React from 'react';

function BlogPost({ title, content, image }) {
    return (
        <article className="blog-post">
            {image && <img src={image} alt={title} className="post-image" />} {/* Ensure correct class name is used */}
            <div className="post-content">
                <h2>{title}</h2>
                <p>{content}</p>
            </div>
        </article>
    );
}

export default BlogPost;
