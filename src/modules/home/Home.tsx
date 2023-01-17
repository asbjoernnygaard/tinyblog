import React, {useEffect, useState} from 'react';
import BlogPost, {BlogPostProps} from "./blogpost/BlogPost";
import {useSearchParams} from "react-router-dom";
import getCommonTags from "./getCommonTags";

function Home() {

  const [blogPosts, setBlogPosts] = useState<BlogPostProps[] | null>(null);
  const [query] = useSearchParams()

  useEffect(() => {
    fetch('https://dummyjson.com/posts')
        .then(res => res.json())
        .then(res => setBlogPosts(res.posts))
  }, [])

  console.log(query)

  const filteredBlogPosts = blogPosts?.filter(post => {
    const queryTag = query.get('sort') || ''
    return post.tags.includes(queryTag)
  })

  // const frequentTags: string[] = getCommonTags(blogPosts);

  return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome to the blog</h1>
        </header>
        <main>
          {filteredBlogPosts?.map(post => {
            return <BlogPost key={post.id} {...post}/>
          })}
        </main>
      </div>
  );
}

export default Home;
