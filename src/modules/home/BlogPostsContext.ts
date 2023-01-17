import {createContext, Dispatch, SetStateAction} from "react";
import {BlogPostProps} from "./blogpost/BlogPost";

export interface iBlogPostContext {
  blogPosts: BlogPostProps[];
  setBlogPosts: Dispatch<SetStateAction<BlogPostProps[]>>;
}

export const BlogPostsContext = createContext<iBlogPostContext>({
  blogPosts: [],
  setBlogPosts: () => {},
});