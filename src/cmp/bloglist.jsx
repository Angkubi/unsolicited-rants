import React from 'react';
import './bloglist.css';

const BlogList = ({ posts }) => {
    return (
        <div className="blog-list">
            {posts.map((post, index) => (
                <div className="blog-post" key={index}>
                    <img src={post.image} alt={post.title} className="post-image" />
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                </div>
            ))}
        </div>
    );
};

export default BlogList;
