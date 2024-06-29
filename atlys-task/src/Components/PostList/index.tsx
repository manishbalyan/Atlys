import React from 'react';
import styled from 'styled-components';
import PostItem from '../PostItem';

const ListContainer = styled.div`
  margin-top: 20px;
`;

interface Post {
  author: string;
  avatar: string;
  time: string;
  content: string;
  comments: number;
  emoji: string;
}

interface PostListProps {
  posts: Post[];
}

const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <ListContainer>
      {posts.map((post, index) => (
        <PostItem key={index} post={post} />
      ))}
    </ListContainer>
  );
};

export default PostList;
