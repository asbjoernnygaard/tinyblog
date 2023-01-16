import React from 'react';

interface BlogPostProps {
  title: string
  body: string
  userId: bigint
  tags: string[]
  reactions: bigint
}

const BlogPost = ({title, body, userId, tags, reactions}: BlogPostProps) => {

  return (
      <article>
        <header>
          <div className={'tags'}>
            {tags.map(tag => {
              return <span>{tag}</span>
            })}
          </div>
          <h2>
            <a>{title}</a>
          </h2>
          <div>
            <img src={'https://thispersondoesnotexist.com/image'} alt={'author'}/>
            {/* TODO: Add href two lines below; links to a list of all posts by this user
            eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <address className={'author'}><a rel='author' href=''>{' User_' + userId.toString()}</a></address>
          </div>
        </header>
        <p>{body}</p>
        <footer>{reactions.toString() + ' users reacted to this post'}</footer>
      </article>
  );
};
export default BlogPost;
