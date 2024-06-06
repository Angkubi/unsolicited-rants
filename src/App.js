import React, { useState } from 'react';
import Header from './cmp/header';
import BlogList from './cmp/bloglist';
import Footer from './cmp/footer';
import './App.css';
import images from './utils/imageloader';

function App() {
  const [posts, setPosts] = useState([
    { title: 'First ', content: 'This is a test. This is a test. This is a test. This is a test. This is a test. This is a test. This is a test.', image: images['img1.jpg'] },
    { title: 'Second ', content: 'This is a test. This is a test. This is a test. This is a test. This is a test. This is a test. This is a test.', image: images['img2.jpg'] },
    { title: 'Third ', content: 'This is a test. This is a test. This is a test. This is a test. This is a test. This is a test. This is a test.', image: images['img3.jpg'] },
    { title: 'Fourth ', content: 'This is a test. This is a test. This is a test. This is a test. This is a test. This is a test. This is a test.', image: images['img4.jpg'] },
    { title: 'Fifth ', content: 'This is a test. This is a test. This is a test. This is a test. This is a test. This is a test. This is a test.', image: images['img5.jpg'] },
    { title: 'Sixth ', content: 'This is a test. This is a test. This is a test. This is a test. This is a test. This is a test. This is a test.', image: images['img6.jpg'] },
    { title: 'Seventh ', content: 'This is a test. This is a test. This is a test. This is a test. This is a test. This is a test. This is a test.', image: images['img7.jpg'] },
    { title: 'Eight ', content: 'This is a test. This is a test. This is a test. This is a test. This is a test. This is a test. This is a test.', image: images['img8.jpg'] },
    { title: 'Ninth ', content: 'This is a test. This is a test. This is a test. This is a test. This is a test. This is a test. This is a test.', image: images['img9.jpg'] },
    { title: 'Tenth ', content: 'This is a test. This is a test. This is a test. This is a test. This is a test. This is a test. This is a test.', image: images['img10.jpg'] },
  ]);

  return (
    <div className="app">
      <Header />
      <main>
        <BlogList posts={posts} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
