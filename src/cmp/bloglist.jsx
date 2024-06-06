import React from 'react';
import { Link } from 'react-router-dom';
import './bloglist.css';

const BlogList = ({ posts }) => {
    return (
        <div className="blog-list">
            {posts.map((post, index) => (
                <div className="blog-post" key={index}>
                    <img src={post.image} alt={post.title} className="post-image" />
                    <Link to={`/post/${post.id}`} className="post-title-link">
                        <h2>{post.title}</h2>
                    </Link>
                    <p>{post.content}</p>
                </div>
            ))}
        </div>
    );
};

export default BlogList;
