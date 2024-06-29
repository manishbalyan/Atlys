import React from 'react';
import styled from 'styled-components';
import { FaComment } from 'react-icons/fa';

const PostContainer = styled.div`
  background-color: #2c2c2c;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
  color: white;
`;

const PostHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;

const UserName = styled.div`
  font-weight: bold;
  color: white;
  font-size: 16px;
  font-weight: 500;
  line-height: 17px
`;

const PostTime = styled.div`
  color: #bbb;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  display: flex;
  justify-content: flex-start;
`;

const MoreOptions = styled.div`
  cursor: pointer;
  color: #bbb;
`;

const PostContent = styled.div`
  background-color: #1a1a1a;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 10px;
  color: #7f8084;
  display: flex;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  display: flex;
  align-items: flex-start;
  text-align: left;
`;

const EmojiWrapper = styled.div`
  margin-right: 10px;
`;

const Comments = styled.div`
  display: flex;
  align-items: center;
  color: #7f8084;
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
`;

const CommentIcon = styled(FaComment)`
  margin-right: 5px;
`;

interface PostItemProps {
  post: {
    author: string;
    avatar: string;
    time: string;
    content: string;
    comments: number;
    emoji: string;
  };
}

const PostItem: React.FC<PostItemProps> = ({ post }) => {
  return (
    <PostContainer>
      <PostHeader>
        <UserInfo>
          <Avatar src={post.avatar} alt="User Avatar" />
          <div>
            <UserName>{post.author}</UserName>
            <PostTime>{post.time}</PostTime>
          </div>
        </UserInfo>
        <MoreOptions>...</MoreOptions>
      </PostHeader>
      <PostContent>
        <EmojiWrapper>{post.emoji}</EmojiWrapper>
        {post.content}
      </PostContent>
      <Comments>
        <CommentIcon />
        {post.comments} comments
      </Comments>
    </PostContainer>
  );
};

export default PostItem;
