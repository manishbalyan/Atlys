import React, { useState } from 'react';
import './App.css';
import Greeting from './Components/Greeting';
import PostInput from './Components/PostInput';
import { defaultPosts}  from './constant';
import PostList from './Components/PostList';


const App: React.FC = () => {
  const [posts, setPosts] = useState(defaultPosts);
  const addPost = (content: string) => {
    const newPost = {
      author: 'Jane Doe',
      avatar: `https://randomuser.me/api/portraits/women/${Math.floor(Math.random()*100)}.jpg`,
      time: 'Just Now',
      content,
      comments: Math.floor(Math.random()*100),
      emoji: '😊',
    };
    setPosts([newPost, ...posts]);
  };
  return (
    <div className="App">
      <Greeting/>
      <PostInput onPost={addPost}/>
      <PostList posts={posts} />
    </div>
  );
}

export default App;
