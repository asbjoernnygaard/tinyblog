import React, {useContext} from 'react';
import BlogPost, {BlogPostProps} from "./blogpost/BlogPost";
import {useSearchParams} from "react-router-dom";
import {BlogPostsContext, iBlogPostContext} from "./BlogPostsContext";

const Posts = () => {
  const {blogPosts} = useContext<iBlogPostContext>(BlogPostsContext);

  const [query] = useSearchParams()

  let filteredPosts: BlogPostProps[] | null = blogPosts;

  if(query.has('sort')){
    filteredPosts = blogPosts.filter(post => {
      // Typescript requires default value '' despite already checking with query.has()
      return post.tags.includes(query.get('sort') || '')
    })
  } else {

  }

  return (
          <main>
            {blogPosts?.map(post => {
              return <BlogPost key={post.id} {...post}/>
            })}
          </main>
      )
}
export default Posts;