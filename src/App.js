import React, { useState } from 'react';
import Header from './cmp/header';
import BlogList from './cmp/bloglist';
import Footer from './cmp/footer';
import './App.css';
import img1 from './img/img1.jpg';
import img2 from './img/img2.jpg';
import img3 from './img/img3.jpg';
import img4 from './img/img4.jpg';
import img5 from './img/img5.jpg';
import img6 from './img/img6.jpg';
import img7 from './img/img7.jpg';
import img8 from './img/img8.jpg';
import img9 from './img/img9.jpg';
import img10 from './img/img10.jpg';


function App() {
  const [posts, setPosts] = useState([
    { title: 'First ', content: 'This is a test. This is a test. This is a test. This is a test. This is a test. This is a test. This is a test.', image: img1 },
    { title: 'Second ', content: 'This is a test. This is a test. This is a test. This is a test. This is a test. This is a test. This is a test.', image: img2 },
    { title: 'Third ', content: 'This is a test. This is a test. This is a test. This is a test. This is a test. This is a test. This is a test.', image: img3 },
    { title: 'Fourth ', content: 'This is a test. This is a test. This is a test. This is a test. This is a test. This is a test. This is a test.', image: img4 },
    { title: 'Fifth ', content: 'This is a test. This is a test. This is a test. This is a test. This is a test. This is a test. This is a test.', image: img5 },
    { title: 'Sixth ', content: 'This is a test. This is a test. This is a test. This is a test. This is a test. This is a test. This is a test.', image: img6 },
    { title: 'Seventh ', content: 'This is a test. This is a test. This is a test. This is a test. This is a test. This is a test. This is a test.', image: img7 },
    { title: 'Eight ', content: 'This is a test. This is a test. This is a test. This is a test. This is a test. This is a test. This is a test.', image: img8 },
    { title: 'Ninth ', content: 'This is a test. This is a test. This is a test. This is a test. This is a test. This is a test. This is a test.', image: img9 },
    { title: 'Tenth ', content: 'This is a test. This is a test. This is a test. This is a test. This is a test. This is a test. This is a test.', image: img10 },
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