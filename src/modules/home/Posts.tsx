import React, {useContext} from 'react';
import BlogPost, {BlogPostProps} from "./blogpost/BlogPost";
import {useSearchParams} from "react-router-dom";
import {BlogPostsContext, iBlogPostContext} from "./BlogPostsContext";

const Posts = () => {
  const {blogPosts} = useContext<iBlogPostContext>(BlogPostsContext);
  const [query] = useSearchParams()

  let filteredPosts = [...blogPosts];

  if(query.has('tag')){
    filteredPosts = blogPosts.filter(post => {
      return post.tags.includes(query.get('tag') || '')
    })
  }

  if(query.has('user')){
    filteredPosts = blogPosts.filter(post => {
      return post.userId.toString() === (query.get('user'))
    })
  }

  if(!filteredPosts.length){
    return (
        <main>
          No content matches set filters.
        </main>)
  }

  return (
          <main>
            {filteredPosts.map(post => {
              return <BlogPost key={post.id} {...post}/>
            })}
          </main>
      )
}

export default Posts;