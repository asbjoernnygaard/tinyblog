import React, {useEffect, useState, createContext} from 'react';
import {BlogPostProps} from "./blogpost/BlogPost";
import Posts from "./Posts";

function Home() {
  const PostsContext = createContext<BlogPostProps[] | null>(null)
  const [blogPosts, setBlogPosts] = useState<BlogPostProps[] | null>(null);

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
        <PostsContext.Provider value={blogPosts}>
          <Posts />
        </PostsContext.Provider>
      </div>
  );
}

export default Home;
