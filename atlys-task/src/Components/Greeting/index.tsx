import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  margin-bottom: 20px;
  color: white;
`;

const Greeting = () => {
  return (
    <HeaderContainer>
      <h1>Hello Jane</h1>
      <p>How are you doing today? Would you like to share something with the community 😊</p>
    </HeaderContainer>
  );
};

export default Greeting;
