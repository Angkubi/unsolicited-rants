import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import Header from './cmp/header';
import BlogList from './cmp/bloglist';
import BlogPost from './cmp/blogpost';
import Footer from './cmp/footer';
import './App.css';
import postsData from './posts'; 

function App() {
  const [allPosts, setAllPosts] = useState(postsData);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 8;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = allPosts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = pageNumber => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const nextPage = () => {
    if (currentPage < Math.ceil(allPosts.length / postsPerPage)) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route 
              path="/" 
              element={<BlogList 
                posts={currentPosts} 
                totalPosts={allPosts.length} 
                postsPerPage={postsPerPage} 
                paginate={paginate} 
                nextPage={nextPage} 
                prevPage={prevPage} 
                currentPage={currentPage} 
              />} 
            />
            <Route path="/post/:id" element={<BlogPostWrapper posts={allPosts} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

const BlogPostWrapper = ({ posts }) => {
  const { id } = useParams();
  const post = posts.find(post => post.id === parseInt(id));

  if (!post) return <div>Post not found</div>;

  return <BlogPost title={post.title} content={post.content} image={post.image} />;
};

export default App;
