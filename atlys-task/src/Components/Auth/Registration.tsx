import React, { useState } from 'react';
import styled from 'styled-components';
import { FaEye, FaTimes } from 'react-icons/fa';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: #27292d;
  padding: 20px;
  border-radius: 10px;
  width: 460px;
  color: white;
  position: relative;
  border: 2px solid #343434;
  border-radius: 8px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  color: #bbb;
  font-size: 24px;
  cursor: pointer;

  &:hover {
    color: white;
  }
`;

const Title = styled.h2`
  margin-bottom: 10px;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
  color: #6b6c70;
`;

const Subtitle = styled.h3`
  margin-bottom: 20px;
  text-align: center;
  font-size: 18px;
  color: #ffffff;
  font-weight: 600;
  line-height: 22px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-size: 14px;
  color: #c5c7ca;
  font-weight: 500;
  line-height: 17px;
  text-align: left;
`;

const Input = styled.input`
  width: 95%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1.5px solid #35373b;
  border-radius: 4px;
  background-color: #27292d;
  color: white;
  font-size: 16px;

  &::placeholder {
    color: #7f8084;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
  }
`;

const PasswordWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PasswordInput = styled(Input)`
  padding-right: 10px;
`;

const TogglePasswordButton = styled.button`
  position: absolute;
  top: 45%;
  right: 10px;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #bbb;
  cursor: pointer;

  &:hover {
    color: white;
  }
`;

const Button = styled.button`
  background-color: #0070f3;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  width: 100%;
  margin-top: 10px;

  &:hover {
    background-color: #005bb5;
  }
`;

const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
  color: #7f8084;
  span{
    margin-right: 5px;
  }
`;

const Link = styled.a`
  color: #c5c7ca;
  font-size: 14px;
  cursor: pointer;
  text-decoration: none;
`;

const Error = styled.div`
  color: red;
  font-size: 12px;
  text-align: left;
`;

interface RegisterProps {
  onClose: () => void;
  onRegister: (email: string, username: string, password: string) => void;
  switchToLogin: () => void;
}

const Register: React.FC<RegisterProps> = ({ onClose, onRegister, switchToLogin }) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError]  = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(username === '' || password === '' || email ===''){
      setError('Enter username email or password');
      return;
    }
    onRegister(email, username, password);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={onClose} aria-label="Close registration form">
          <FaTimes />
        </CloseButton>
        <Title>SIGN UP</Title>
        <Subtitle>Create an account to continue</Subtitle>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => {
              setError('');
              setEmail(e.target.value)}
            }
            aria-label="Email"
          />
          <Label htmlFor="username">Username</Label>
          <Input
            type="text"
            id="username"
            placeholder="Choose a preferred username"
            value={username}
            onChange={(e) => {
              setError('');
              setUsername(e.target.value)}
            }
            aria-label="Username"
          />
          <Label htmlFor="password">Password</Label>
          <PasswordWrapper>
            <PasswordInput
              type={showPassword ? 'text' : 'password'}
              id="password"
              placeholder="Choose a strong password"
              value={password}
              onChange={(e) => {
                setError('');
                setPassword(e.target.value)}
              }
              aria-label="Password"
            />
            <TogglePasswordButton
              type="button"
              onClick={togglePasswordVisibility}
              aria-label="Toggle password visibility"
            >
              <FaEye />
            </TogglePasswordButton>
          </PasswordWrapper>
          {error && <Error>{error}</Error>}
          <Button onClick={handleSubmit}>Continue</Button>
          <LinkWrapper>
            <span>Already have an account?</span>
            <Link onClick={switchToLogin}>Login →</Link>
          </LinkWrapper>
        </div>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Register;
