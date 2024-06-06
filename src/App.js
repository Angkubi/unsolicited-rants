import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import Header from './cmp/header';
import BlogList from './cmp/bloglist';
import BlogPost from './cmp/blogpost';
import Footer from './cmp/footer';
import './App.css';
import images from './utils/imageloader';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'First', content: 'This is a test. This is a test. This is a test. This is a test. This is a test. This is a test. This is a test.', image: images['img1.jpg'] },
    { id: 2, title: 'Second', content: 'This is a test. This is a test. This is a test. This is a test. This is a test. This is a test. This is a test.', image: images['img2.jpg'] },
    { id: 3, title: 'Third', content: 'This is a test. This is a test. This is a test. This is a test. This is a test. This is a test. This is a test.', image: images['img3.jpg'] },
    { id: 4, title: 'Fourth', content: 'This is a test. This is a test. This is a test. This is a test. This is a test. This is a test. This is a test.', image: images['img4.jpg'] },
    { id: 5, title: 'Fifth', content: 'This is a test. This is a test. This is a test. This is a test. This is a test. This is a test. This is a test.', image: images['img5.jpg'] },
    { id: 6, title: 'Sixth', content: 'This is a test. This is a test. This is a test. This is a test. This is a test. This is a test. This is a test.', image: images['img6.jpg'] },
    { id: 7, title: 'Seventh', content: 'This is a test. This is a test. This is a test. This is a test. This is a test. This is a test. This is a test.', image: images['img7.jpg'] },
    { id: 8, title: 'Eighth', content: 'This is a test. This is a test. This is a test. This is a test. This is a test. This is a test. This is a test.', image: images['img8.jpg'] },
    { id: 9, title: 'Ninth', content: 'This is a test. This is a test. This is a test. This is a test. This is a test. This is a test. This is a test.', image: images['img9.jpg'] },
    { id: 10, title: 'Tenth', content: 'This is a test. This is a test. This is a test. This is a test. This is a test. This is a test. This is a test.', image: images['img10.jpg'] },
  ]);

  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<BlogList posts={posts} />} />
            <Route path="/post/:id" element={<BlogPostWrapper posts={posts} />} />
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
