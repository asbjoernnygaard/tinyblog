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
            {tags.map(tag => <FilterButton key={tag} filter={'tag'} value={tag}/>)}
          </div>
          <h2>
            <a>{title}</a>
          </h2>
          <div>
            <img src={'https://thispersondoesnotexist.com/image'} width={100} alt={'author'}/>
            <address className={'author'}>
              <FilterButton filter={'user'}
                            value={userId.toString()}
                            text={'User_' + userId.toString()}/>
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
