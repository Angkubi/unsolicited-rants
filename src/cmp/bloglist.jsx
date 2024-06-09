import React from 'react';
import { Link } from 'react-router-dom';
import './bloglist.css';

const BlogList = ({ posts, totalPosts, postsPerPage, paginate, nextPage, prevPage, currentPage }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    const renderPageNumbers = () => {
        let startPage = Math.max(currentPage - 1, 1);
        let endPage = Math.min(currentPage + 1, pageNumbers.length);

        if (currentPage === 1) {
            endPage = Math.min(currentPage + 2, pageNumbers.length);
        } else if (currentPage === pageNumbers.length) {
            startPage = Math.max(currentPage - 2, 1);
        }

        return pageNumbers.slice(startPage - 1, endPage).map(number => (
            <button 
                key={number} 
                onClick={() => paginate(number)} 
                className={`page-link ${number === currentPage ? 'active' : ''}`}
            >
                {number}
            </button>
        ));
    };

    return (
        <div className="blog-list">
            {posts.map((post, index) => (
                <div className="blog-post" key={index}>
                    <img src={post.image} alt={post.title} className="post-image" />
                    <Link to={`/post/${post.id}`} className="post-title-link">
                        <h2>{post.title}</h2>
                    </Link>
                    <p>{post.desc}</p>
                </div>
            ))}
            <div className="pagination">
                <button onClick={prevPage} disabled={currentPage === 1} className="page-link">
                    &laquo;
                </button>
                {renderPageNumbers()}
                <button onClick={nextPage} disabled={currentPage === pageNumbers.length} className="page-link">
                    &raquo;
                </button>
            </div>
        </div>
    );
};

export default BlogList;
