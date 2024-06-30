import React, { useEffect, useState } from 'react';
import './App.css';
import Greeting from './Components/Greeting';
import PostInput from './Components/PostInput';
import { defaultPosts}  from './constant';
import PostList from './Components/PostList';
import Login from './Components/Auth/Login';


const App: React.FC = () => {
  const [posts, setPosts] = useState(defaultPosts);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState<boolean>(false);

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

  const closeLogin = () => {
    setShowLogin(false);
  };

  return (
    <div className="App">
      <Greeting/>
      <PostInput onPost={addPost}/>
      <PostList posts={posts} />
      {showLogin && <Login onClose={closeLogin} onLogin={handleLogin} />}
    </div>
  );
}

export default App;
