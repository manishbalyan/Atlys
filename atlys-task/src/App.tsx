import React, { useEffect, useState } from 'react';
import './App.css';
import Greeting from './Components/Greeting';
import PostInput from './Components/PostInput';
import { defaultPosts}  from './constant';
import PostList from './Components/PostList';
import Login from './Components/Auth/Login';
import Register from './Components/Auth/Registration';


const App: React.FC = () => {
  const [posts, setPosts] = useState(defaultPosts);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState<boolean>(false);
  const [showRegister, setShowRegister] = useState<boolean>(false);

  useEffect(() => {
    const loggedIn = sessionStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedIn);
  }, []);

  const addPost = (content: string) => {
    if (!isLoggedIn) {
      setShowLogin(true);
      return;
    }
    const username = sessionStorage.getItem('username') || '';
    const avatar = sessionStorage.getItem('userImage') || `https://randomuser.me/api/portraits/women/${Math.floor(Math.random()*100)}.jpg`
    sessionStorage.setItem('userImage', avatar);
    const newPost = {
      author: username,
      avatar: avatar,
      time: 'Just Now',
      content,
      comments: Math.floor(Math.random()*100),
      emoji: '😊',
    };
    setPosts([newPost, ...posts]);
  };

  const handleLogin = (username: string, password: string) => {
    sessionStorage.setItem('isLoggedIn', 'true');
    sessionStorage.setItem('username', username);
    setIsLoggedIn(true);
    setShowLogin(false);
  };

  const handleRegister = (email: string, username: string, password: string) => {
    localStorage.setItem('register', 'true');
    sessionStorage.setItem('isLoggedIn', 'true');
    sessionStorage.setItem('username', username);
    setIsLoggedIn(true);
    setShowRegister(false);
  };

  const closeLogin = () => {
    setShowLogin(false);
  };

  const closeRegister = () => {
    setShowRegister(false);
  };

  const switchToRegister = () => {
    setShowLogin(false);
    setShowRegister(true);
  };

  const switchToLogin = () => {
    setShowRegister(false);
    setShowLogin(true);
  };

  return (
    <div className="App">
      <Greeting/>
      <PostInput onPost={addPost}/>
      <PostList posts={posts} />
      {showLogin && <Login onClose={closeLogin} onLogin={handleLogin} switchToRegister={switchToRegister} />}
      {showRegister && <Register onClose={closeRegister} onRegister={handleRegister} switchToLogin={switchToLogin} />}
    </div>
  );
}

export default App;
