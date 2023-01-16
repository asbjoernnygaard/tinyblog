import React, {useEffect, useState} from 'react';
import './App.css';
import BlogPost from "./modules/common/BlogPost";

function App() {

  const [blogPosts, setBlogPosts] = useState(null);

  useEffect(() => {
    fetch('https://dummyjson.com/posts')
        .then(res => res.json())
        .then(res => setBlogPosts(res.posts))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main>
        {blogPosts?.map(post => {

        })}
      </main>
    </div>
  );
}

export default App;
