// components/Header.tsx
import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
  flex-direction: column;
  align-items: flex-start;
`;

const Name = styled.h1`
    font-size: 28px;
    margin-bottom: 0.5rem;
    color: #C5C7CA;
    font-weight: 500;
    line-height: 34px;
`;


const Text = styled.p`
    font-size: 16px;
    color: #7F8084;
    font-weight: 400;
    line-height: 24px;
`;


const Greeting: React.FC = () => {
  return (
    <HeaderContainer>
      <Name tabIndex={0}>Hello Jane</Name>
      <Text tabIndex={0}>How are you doing today? Would you like to share something with the community 😊</Text>
    </HeaderContainer>
  );
};

export default Greeting;
