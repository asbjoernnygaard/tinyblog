import React from 'react';
import FilterButton from "../../common/FilterButton";

export interface BlogPostProps {
  id: number
  title: string
  body: string
  userId: number
  tags: string[]
  reactions: number
}

const BlogPost = ({id, title, body, userId, tags, reactions}: BlogPostProps) => {

  return (
      <article>
        <header>
          <div className={'tags'}>
            {tags.map(tag => <FilterButton key={tag} tag={tag}/>)}
          </div>
          <h2>
            <a>{title}</a>
          </h2>
          <div>
            <img src={'https://thispersondoesnotexist.com/image'} alt={'author'}/>
            {/* TODO: Add href two lines below; links to a list of all posts by this user
            eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <address className={'author'}>
              <a rel='author' href='src/modules/home/(blogpost)'>{' User_' + userId.toString()}</a>
            </address>
          </div>
        </header>
        <p>{body}</p>
        <footer>{reactions.toString() + ' users reacted to this post'}</footer>
        <hr/>
      </article>
  );
};
export default BlogPost;
