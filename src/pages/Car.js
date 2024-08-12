import React, { useEffect, useState } from 'react';
import { fetchPosts } from '../apiService2';

import "../App.css";

import Image1 from "../images/img-auto3.jpg";


import Navbar from "../Navbar";

const Car = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading]= useState(true);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const data = await fetchPosts();
        setPosts(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    getPosts();
  }, []);

  if (loading) {
    return <div>Loading items..</div>;
  }

  return (
    <div>
         <Navbar/>
      <h1 className='horizz'>AUTOMOBILE</h1>
      <div className='post-container'>
      
      {posts.length === 0 ? (
        <div>No posts available</div>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post._id}>
              <h2 className='horiz'>{post.title}</h2><br></br>
              <div className='meen'>
              <img src={Image1} className='page-image'/><br></br>
              <p className='bb'>{post.body} </p>
              </div>
              <p className='hori'>Author: {post.author}</p>
              <br></br>
              <br></br>
              <hr></hr>
              <br></br>
            </li>
          ))}

        </ul>
      )}
      
      </div>
    
    </div>
  );
};

export default Car;