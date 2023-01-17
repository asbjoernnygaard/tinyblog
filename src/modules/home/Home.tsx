import React, {useEffect, useState, createContext} from 'react';
import {BlogPostProps} from "./blogpost/BlogPost";
import Posts from "./Posts";
import {BlogPostsContext} from "./BlogPostsContext";

function Home() {
  const [blogPosts, setBlogPosts] = useState<BlogPostProps[] | []>([]);

  useEffect(() => {
    fetch('https://dummyjson.com/posts')
        .then(res => res.json())
        .then(res => setBlogPosts(res.posts))
  }, [])

  return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome to the blog</h1>
        </header>
        <BlogPostsContext.Provider value={{blogPosts, setBlogPosts}}>
          <Posts />
        </BlogPostsContext.Provider>
      </div>
  );
}

export default Home;
