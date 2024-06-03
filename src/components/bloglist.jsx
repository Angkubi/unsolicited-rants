// src/components/BlogList.js
import React from 'react';
import BlogPost from './blogpost';

function BlogList({ posts }) {
    return (
        <section className="blog-list">
            {posts.map((post, index) => (
                <BlogPost
                    key={index}
                    title={<a href={`/rant/${index}`}>{post.title}</a>} // Wrap title in an anchor tag
                    content={post.content}
                    image={post.image}
                />
            ))}
        </section>
    );
}

export default BlogList;
