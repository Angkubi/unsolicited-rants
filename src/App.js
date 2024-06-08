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
  
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<BlogList posts={allPosts} />} />
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
