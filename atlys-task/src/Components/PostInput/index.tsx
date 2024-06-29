// src/components/PostInput.tsx
import React, { useState } from 'react';
import styled from 'styled-components';
import { FaComment } from 'react-icons/fa';

const InputContainer = styled.div`
  background-color: #2c2c2c;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  border: 2px solid #35373b;
  flex-direction: column;
`;

const CreatePost = styled.div`
  color: #c5c7ca;
  font-size: 28px;
  font-weight: 500;
  line-height: 22px;
  margin-bottom: 20px;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #1a1a1a;
  padding: 10px 20px;
  border-radius: 8px;
  width: 94%;
  margin-bottom: 10px;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #333;
  border-radius: 50%;
  padding: 10px;
  margin-right: 10px;
`;

const Input = styled.input`
  background: none;
  border: none;
  outline: none;
  color: #bbb;
  font-size: 1rem;
  flex-grow: 1;
  &::placeholder {
    color: #7f8080;
  }
`;

const Button = styled.button`
  background-color: #0070f3;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-self: end;
  &:hover {
    background-color: #005bb5;
  }
`;

interface PostInputProps {
  onPost: (content: string) => void;
}

const PostInput: React.FC<PostInputProps> = ({ onPost }) => {
  const [postContent, setPostContent] = useState<string>('');

  const handlePost = () => {
    if (postContent.trim()) {
      onPost(postContent);
      setPostContent('');
    }
  };

  return (
    <InputContainer>
    <CreatePost>Create Post</CreatePost>
      <InputWrapper>
        <IconWrapper>
          <FaComment color="#bbb" />
        </IconWrapper>
        <Input
          type="text"
          placeholder="How are you feeling today?"
          value={postContent}
          onChange={(e) => setPostContent(e.target.value)}
        />
      </InputWrapper>
      <Button onClick={handlePost}>Post</Button>
    </InputContainer>
  );
};

export default PostInput;